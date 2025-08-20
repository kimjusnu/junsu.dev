import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// 방명록 조회
export async function GET() {
  try {
    const { data, error } = await supabase
      .from("guestbook")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    console.error("방명록 조회 오류:", error);
    return NextResponse.json(
      { error: "방명록을 불러오는데 실패했습니다." },
      { status: 500 }
    );
  }
}

// 방명록 작성
export async function POST(request: Request) {
  try {
    const { name, message } = await request.json();

    if (!name || !message) {
      return NextResponse.json(
        { error: "이름과 메시지를 모두 입력해주세요." },
        { status: 400 }
      );
    }

    // 클라이언트 IP 주소 가져오기
    let clientIP = "unknown";
    try {
      const ipResponse = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipResponse.json();
      clientIP = ipData.ip;
    } catch (error) {
      console.error("IP 주소 가져오기 실패:", error);
    }

    const { data, error } = await supabase
      .from("guestbook")
      .insert([{ name, message, ip_address: clientIP }])
      .select();

    if (error) throw error;

    return NextResponse.json(data[0]);
  } catch (error) {
    console.error("방명록 작성 오류:", error);
    return NextResponse.json(
      { error: "방명록 작성에 실패했습니다." },
      { status: 500 }
    );
  }
}
