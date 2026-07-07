import Navbar from '@/components/ui/Navbar'
import FooterSection from '@/components/sections/FooterSection'
import Link from 'next/link'

export const metadata = {
  title: '개인정보처리방침 | Team Resonance',
  description: '주식회사 팀레조넌스 개인정보처리방침',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <article className="max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">개인정보처리방침</h1>
        <p className="text-gray-400 text-sm mb-16">
          최종 업데이트: 2026년 7월 8일 · 시행일: 2026년 7월 8일
        </p>

        <div className="prose prose-invert max-w-none space-y-12">
          <p className="text-gray-300 leading-relaxed">
            주식회사 팀레조넌스(이하 “회사”)는 이용자의 개인정보를 소중히 여기며,
            「개인정보 보호법」 및 관련 법령을 준수하고 있습니다. 회사는 개인정보처리방침을 통하여
            이용자의 개인정보가 어떠한 목적과 방식으로 수집·이용되며, 이를 보호하기 위해
            어떠한 조치가 취해지고 있는지 알려드립니다.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-brand-yellow mb-4">1. 수집하는 개인정보 항목</h2>
            <p className="text-gray-300 mb-3">회사는 상담 신청 및 서비스 제공을 위하여 다음의 개인정보를 수집합니다.</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><strong>필수 항목:</strong> 이름, 이메일 주소, 회사명/브랜드명, 문의 내용</li>
              <li><strong>선택 항목:</strong> 연락처(전화/카카오), 담당 직책, 웹사이트 URL</li>
              <li><strong>자동 수집:</strong> IP 주소, 쿠키, 접속 로그, 방문 기록</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-yellow mb-4">2. 개인정보의 수집·이용 목적</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>상담 신청에 대한 응대 및 서비스 안내</li>
              <li>인플루언서 시딩·마케팅 컨설팅 서비스 제공</li>
              <li>계약 이행 및 서비스 이용에 따른 요금 정산</li>
              <li>공지사항 전달, 서비스 개선을 위한 통계 분석</li>
              <li>부정 이용 방지 및 관련 법령 준수</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-yellow mb-4">3. 개인정보의 보유·이용 기간</h2>
            <p className="text-gray-300 mb-3">
              회사는 원칙적으로 개인정보 수집·이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
              단, 관련 법령에 의해 보존할 필요가 있는 경우 다음과 같이 보관합니다.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>계약 또는 청약철회 등에 관한 기록: 5년 (전자상거래법)</li>
              <li>대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래법)</li>
              <li>소비자 불만 또는 분쟁처리에 관한 기록: 3년 (전자상거래법)</li>
              <li>웹사이트 방문 기록: 3개월 (통신비밀보호법)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-yellow mb-4">4. 개인정보의 제3자 제공</h2>
            <p className="text-gray-300">
              회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
              다만, 다음의 경우는 예외로 합니다.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-3">
              <li>이용자가 사전에 동의한 경우</li>
              <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차에 따라 요구가 있는 경우</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-yellow mb-4">5. 개인정보의 위탁</h2>
            <p className="text-gray-300 mb-3">회사는 원활한 서비스 제공을 위해 다음과 같이 개인정보 처리 업무를 위탁하고 있습니다.</p>
            <div className="border border-zinc-800 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-zinc-900">
                  <tr>
                    <th className="p-3 text-left text-gray-300 font-semibold">수탁업체</th>
                    <th className="p-3 text-left text-gray-300 font-semibold">위탁 업무 내용</th>
                  </tr>
                </thead>
                <tbody className="text-gray-400">
                  <tr className="border-t border-zinc-800">
                    <td className="p-3">Google LLC</td>
                    <td className="p-3">문의 폼 데이터 저장 (Google Sheets)</td>
                  </tr>
                  <tr className="border-t border-zinc-800">
                    <td className="p-3">Vercel Inc.</td>
                    <td className="p-3">웹사이트 호스팅</td>
                  </tr>
                  <tr className="border-t border-zinc-800">
                    <td className="p-3">Microsoft Corp.</td>
                    <td className="p-3">이메일 발송 및 수신 (Office 365)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-yellow mb-4">6. 이용자의 권리와 행사 방법</h2>
            <p className="text-gray-300 mb-3">
              이용자는 언제든지 자신의 개인정보를 조회·수정·삭제·처리정지를 요구할 수 있습니다.
              아래 개인정보 보호책임자에게 서면, 전화, 이메일로 요청하시면 지체 없이 조치하겠습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-yellow mb-4">7. 개인정보의 안전성 확보 조치</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>개인정보 접근 권한 최소화 및 관리자 지정</li>
              <li>개인정보 처리 시스템 접근 통제 및 접근 로그 보관</li>
              <li>개인정보의 암호화 저장 및 전송 구간 암호화(HTTPS)</li>
              <li>정기적인 보안 점검 및 임직원 교육</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-yellow mb-4">8. 쿠키(Cookie) 사용에 관한 사항</h2>
            <p className="text-gray-300">
              회사는 이용자에게 개인 맞춤 서비스를 제공하기 위해 쿠키를 사용할 수 있습니다.
              이용자는 웹 브라우저의 옵션에서 쿠키 저장을 거부하거나 삭제할 수 있으며,
              거부 시 서비스 이용에 일부 제한이 있을 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-yellow mb-4">9. 개인정보 보호책임자</h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 space-y-2 text-gray-300">
              <p><strong className="text-white">성명:</strong> 노정환</p>
              <p><strong className="text-white">직책:</strong> 대표이사</p>
              <p><strong className="text-white">이메일:</strong> <a href="mailto:contact@rsnc.co.kr" className="text-brand-yellow hover:underline">contact@rsnc.co.kr</a></p>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              기타 개인정보 침해에 대한 신고나 상담이 필요한 경우, 아래 기관에 문의하실 수 있습니다.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-400 text-sm mt-2">
              <li>개인정보침해신고센터 (privacy.kisa.or.kr / 국번없이 118)</li>
              <li>대검찰청 사이버범죄수사단 (spo.go.kr / 국번없이 1301)</li>
              <li>경찰청 사이버안전국 (cyberbureau.police.go.kr / 국번없이 182)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-yellow mb-4">10. 개정 사항</h2>
            <p className="text-gray-300">
              본 개인정보처리방침은 관련 법령 또는 회사 정책에 따라 변경될 수 있습니다.
              변경 시 웹사이트 공지사항을 통해 사전 고지하며, 중대한 변경의 경우 30일 이전에 공지합니다.
            </p>
          </section>

          <div className="pt-8 border-t border-zinc-800">
            <Link href="/" className="text-brand-yellow hover:underline">← 홈으로 돌아가기</Link>
          </div>
        </div>
      </article>
      <FooterSection />
    </main>
  )
}
