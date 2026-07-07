import Navbar from '@/components/ui/Navbar'
import FooterSection from '@/components/sections/FooterSection'
import Link from 'next/link'

export const metadata = {
  title: '이용약관 | Team Resonance',
  description: '주식회사 팀레조넌스 서비스 이용약관',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <article className="max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">이용약관</h1>
        <p className="text-gray-400 text-sm mb-16">
          최종 업데이트: 2026년 7월 8일 · 시행일: 2026년 7월 8일
        </p>

        <div className="prose prose-invert max-w-none space-y-12">

          <section>
            <h2 className="text-2xl font-bold text-brand-yellow mb-4">제 1 조 (목적)</h2>
            <p className="text-gray-300 leading-relaxed">
              본 약관은 주식회사 팀레조넌스(이하 “회사”)가 운영하는 웹사이트 및 관련 서비스(이하 “서비스”)의
              이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-yellow mb-4">제 2 조 (정의)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-300">
              <li><strong>“서비스”</strong>란 회사가 제공하는 인플루언서 시딩, 마케팅 컨설팅, 콘텐츠 방향성 제안, 크리에이터 DB 제공 등 일체의 서비스를 의미합니다.</li>
              <li><strong>“이용자”</strong>란 본 약관에 따라 회사의 서비스를 이용하는 개인 또는 법인을 말합니다.</li>
              <li><strong>“콘텐츠”</strong>란 서비스를 통해 제공되는 모든 정보, 자료, 데이터, 이미지, 문서 등을 의미합니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-yellow mb-4">제 3 조 (약관의 효력 및 변경)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-300">
              <li>본 약관은 웹사이트에 게시함으로써 효력을 발생합니다.</li>
              <li>회사는 관련 법령을 위반하지 않는 범위에서 본 약관을 개정할 수 있으며, 변경 시 시행일 7일 전(중대한 변경은 30일 전)부터 웹사이트에 공지합니다.</li>
              <li>변경된 약관에 동의하지 않는 이용자는 서비스 이용을 중단하고 회사에 통지함으로써 계약을 해지할 수 있습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-yellow mb-4">제 4 조 (서비스의 제공)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-300">
              <li>회사는 이용자에게 아래와 같은 서비스를 제공합니다.
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>인플루언서 시딩 및 브랜드 협업 매칭</li>
                  <li>마케팅 컨설팅 및 콘텐츠 방향성 제안</li>
                  <li>크리에이터 데이터베이스 제공</li>
                  <li>기타 회사가 정하는 서비스</li>
                </ul>
              </li>
              <li>서비스의 구체적인 내용, 대상, 방법은 별도의 계약서 또는 견적서에 따릅니다.</li>
              <li>회사는 서비스 개선을 위해 사전 고지 후 서비스 내용을 변경할 수 있습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-yellow mb-4">제 5 조 (이용자의 의무)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-300">
              <li>이용자는 서비스 이용 시 다음 행위를 하여서는 아니 됩니다.
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>타인의 정보 도용 또는 허위 정보 제공</li>
                  <li>회사가 제공하는 콘텐츠 또는 자료의 무단 복제·배포·판매</li>
                  <li>회사의 지식재산권을 침해하는 행위</li>
                  <li>법령 또는 공서양속에 위반되는 행위</li>
                  <li>기타 회사의 정상적인 서비스 운영을 방해하는 행위</li>
                </ul>
              </li>
              <li>이용자는 서비스와 관련하여 필요한 정보를 성실히 제공해야 하며, 정보가 변경된 경우 즉시 회사에 통지해야 합니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-yellow mb-4">제 6 조 (지식재산권)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-300">
              <li>서비스와 관련하여 회사가 제작한 모든 콘텐츠에 대한 저작권 및 지식재산권은 회사에 귀속됩니다.</li>
              <li>이용자는 회사의 사전 서면 동의 없이 서비스를 통해 얻은 정보를 상업적으로 이용할 수 없습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-yellow mb-4">제 7 조 (요금 및 결제)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-300">
              <li>서비스 이용에 따른 요금은 회사와 이용자 간 별도 계약 또는 견적서에 따릅니다.</li>
              <li>결제 방법, 지급 기한, 부가세 등의 세부 사항은 별도 문서로 정합니다.</li>
              <li>이용자의 귀책사유로 인한 미납·지연 시 회사는 서비스 제공을 중단할 수 있습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-yellow mb-4">제 8 조 (계약의 해지)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-300">
              <li>이용자는 언제든지 서비스 이용을 중단할 수 있으며, 회사에 서면(이메일 포함)으로 해지 의사를 통지해야 합니다.</li>
              <li>회사는 이용자가 본 약관을 위반하거나 서비스의 정상적인 운영을 방해한 경우, 사전 통지 후 계약을 해지할 수 있습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-yellow mb-4">제 9 조 (면책 조항)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-300">
              <li>회사는 천재지변, 전쟁, 정전, 통신망 장애 등 불가항력적 사유로 인해 서비스 제공이 불가능한 경우 책임을 지지 않습니다.</li>
              <li>회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대해 책임을 지지 않습니다.</li>
              <li>회사가 제공하는 인플루언서 정보의 최신성과 정확성은 서비스 제공 시점을 기준으로 하며, 이후 변경 사항에 대한 책임을 지지 않습니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-yellow mb-4">제 10 조 (분쟁 해결 및 관할)</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-300">
              <li>본 약관에 관한 분쟁에 대해서는 대한민국 법을 준거법으로 합니다.</li>
              <li>회사와 이용자 간 발생한 분쟁에 관한 소송의 관할 법원은 서울동부지방법원으로 합니다.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-brand-yellow mb-4">부칙</h2>
            <p className="text-gray-300">본 약관은 <strong>2026년 7월 8일</strong>부터 시행합니다.</p>
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
