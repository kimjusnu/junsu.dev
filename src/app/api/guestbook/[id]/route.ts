import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// 좋아요 토글
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // 현재 좋아요 수 조회
    const { data: currentData, error: selectError } = await supabase
      .from("guestbook")
      .select("likes")
      .eq("id", id)
      .single();

    if (selectError) throw selectError;

    // 좋아요 토글: 현재 좋아요가 있으면 제거, 없으면 추가
    const newLikes = (currentData.likes || 0) > 0 ? 0 : 1;

    const { data, error } = await supabase
      .from("guestbook")
      .update({ likes: newLikes })
      .eq("id", id)
      .select();

    if (error) throw error;

    return NextResponse.json(data[0]);
  } catch (error) {
    console.error("좋아요 토글 오류:", error);
    return NextResponse.json(
      { error: "좋아요 토글에 실패했습니다." },
      { status: 500 }
    );
  }
}

// 방명록 수정
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { name, message, authorId } = await request.json();

    if (!name || !message) {
      return NextResponse.json(
        { error: "이름과 메시지를 모두 입력해주세요." },
        { status: 400 }
      );
    }

    // 작성자 확인 (IP 주소로 식별)
    const { data: currentEntry, error: selectError } = await supabase
      .from("guestbook")
      .select("ip_address")
      .eq("id", id)
      .single();

    if (selectError) throw selectError;

    // IP 주소가 일치하는지 확인
    if (currentEntry.ip_address !== authorId) {
      return NextResponse.json(
        { error: "본인이 작성한 글만 수정할 수 있습니다." },
        { status: 403 }
      );
    }

    const { data, error } = await supabase
      .from("guestbook")
      .update({ name, message })
      .eq("id", id)
      .select();

    if (error) throw error;

    return NextResponse.json(data[0]);
  } catch (error) {
    console.error("방명록 수정 오류:", error);
    return NextResponse.json(
      { error: "방명록 수정에 실패했습니다." },
      { status: 500 }
    );
  }
}

// 방명록 삭제
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { authorId } = await request.json();

    // 작성자 확인 (IP 주소로 식별)
    const { data: currentEntry, error: selectError } = await supabase
      .from("guestbook")
      .select("ip_address")
      .eq("id", id)
      .single();

    if (selectError) throw selectError;

    // IP 주소가 일치하는지 확인
    if (currentEntry.ip_address !== authorId) {
      return NextResponse.json(
        { error: "본인이 작성한 글만 삭제할 수 있습니다." },
        { status: 403 }
      );
    }

    const { error } = await supabase.from("guestbook").delete().eq("id", id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("방명록 삭제 오류:", error);
    return NextResponse.json(
      { error: "방명록 삭제에 실패했습니다." },
      { status: 500 }
    );
  }
}
