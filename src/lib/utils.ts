// IP 주소 가져오기
export async function getClientIP(): Promise<string> {
  try {
    // 외부 IP 확인 서비스 사용
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("IP 주소 가져오기 실패:", error);
    return "unknown";
  }
}

// IP 주소 마스킹 (개인정보 보호)
export function maskIPAddress(ip: string): string {
  if (ip === "unknown") return ip;

  // IPv4: 192.168.1.1 → 192.168.*.*
  if (ip.includes(".")) {
    const parts = ip.split(".");
    if (parts.length === 4) {
      return `${parts[0]}.${parts[1]}.*.*`;
    }
  }

  // IPv6: 2001:db8::1 → 2001:db8:*:*
  if (ip.includes(":")) {
    const parts = ip.split(":");
    if (parts.length >= 4) {
      return `${parts[0]}:${parts[1]}:*:*`;
    }
  }

  return ip;
}
