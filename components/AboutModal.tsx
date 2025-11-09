/**
 * AboutModal Component
 *
 * Modal popup for displaying detailed about information.
 */

'use client';

import { useEffect } from 'react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button - Fixed position */}
        <div className="absolute top-6 right-6 z-50">
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-8 md:p-12 overflow-y-auto flex-1">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Who is JK Park <span className="text-3xl text-gray-600">(박중근)</span>?
            </h2>
          </div>

          {/* Main Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-lg">
                안녕하세요, <strong>박중근</strong>입니다.
              </p>

              <p>
                저는 Nike, Coca-Cola, Adidas, Dr. Martens 등 글로벌 기업에서 20년 넘게 쌓아온
                리더십과 전략 경험을 바탕으로, 현재 <strong>Executive Coach, 저자, 강연자, 컨설턴트</strong>로
                활동하고 있습니다.
              </p>

              <p>
                2018년 <strong>KEMP KOREA</strong>를 설립하여 리더십 개발과 조직 문화 혁신을 돕고 있으며,
                특히 20대와 30대가 자신만의 커리어를 설계하고 성장할 수 있도록 멘토링하고 있습니다.
              </p>
            </div>

            {/* Books */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📚 저서 EBS BOOKS</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span><strong>70년대생이 운다</strong> - 다른 세대를 이끌기 위한 효과적인 뉴리더십 제안</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span><strong>이기적 팀장 사용 설명서</strong> - 사원에서 중간 관리자까지를 위한 실전 followership</span>
                </li>
              </ul>
            </div>

            {/* Career Journey */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">💼 Career Journey</h3>
              <div className="space-y-3 text-gray-700">
                <div className="border-l-4 border-teal-500 pl-4 py-2">
                  <p className="font-semibold text-gray-900">현재 (2018 - Present)</p>
                  <ul className="mt-2 space-y-1">
                    <li>• <strong>KEMP KOREA</strong> - CEO & Founder</li>
                    <li>• <strong>ODC Pte Ltd (싱가포르)</strong> - Sr. Consultant</li>
                    <li>• <strong>CMOE</strong> - Executive Coach</li>
                  </ul>
                  <p className="mt-2 text-sm text-gray-600">
                    Synopsys, Celestica, Entegris 등 글로벌 기업 대상 리더십, 커뮤니케이션, 팀빌딩 워크샵 진행
                  </p>
                </div>

                <div className="border-l-4 border-blue-400 pl-4 py-2">
                  <p className="font-semibold text-gray-900">Dr. Martens Korea (2016-2018)</p>
                  <p className="text-sm">General Manager / 대표이사</p>
                  <ul className="mt-2 text-sm space-y-1">
                    <li>• P&L 책임</li>
                    <li>• 2년 연속 평균 35% 성장률 달성</li>
                    <li>• 서울 및 주요 상권 30개 매장 리뉴얼 및 오픈</li>
                    <li>• 글로벌 리더십 부문 최고 점수 달성</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-400 pl-4 py-2">
                  <p className="font-semibold text-gray-900">Adidas Korea (2001-2016)</p>
                  <p className="text-sm">Director of BU Outdoor, Basketball & Heartbeat Sports</p>
                  <ul className="mt-2 text-sm space-y-1">
                    <li>• 15년간 다양한 카테고리 리더십 경험</li>
                    <li>• 아웃도어 부문 7년간 16배 성장 달성</li>
                    <li>• 러닝 카테고리 시장 점유율 4.6% → 16.8% 성장</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-400 pl-4 py-2">
                  <p className="font-semibold text-gray-900">Coca-Cola (2001)</p>
                  <p className="text-sm">Channel Marketing Manager</p>
                  <ul className="mt-2 text-sm space-y-1">
                    <li>• 전 판매 채널 상품 구성 스탠다드 제작</li>
                    <li>• 판매 채널별 마케팅 홍보 전략 수립</li>
                  </ul>
                </div>

                <div className="border-l-4 border-gray-400 pl-4 py-2">
                  <p className="font-semibold text-gray-900">Nike Korea (1996-2000)</p>
                  <p className="text-sm">Footwear Marketing Manager</p>
                  <ul className="mt-2 text-sm space-y-1">
                    <li>• 나이키 역사상 처음으로 카테고리 전문 Specialty Channel 구축 [축구, 테니스, 야구, 골프, 아웃도어]</li>
                    <li>• 매장 관리 영업</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Expertise */}
            <div className="border-l-4 border-teal-500 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 전문 분야</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span><strong>Executive Coaching:</strong> C-level 및 M-level 임원 코칭</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span><strong>Leadership Development:</strong> 리더십 워크샵 설계 및 진행</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span><strong>Strategy Consulting:</strong> 비즈니스 전략 수립 및 실행</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span><strong>Organizational Development:</strong> 조직 갈등 해결 및 생산성 향상</span>
                </li>
              </ul>
            </div>

            {/* Education & Certifications */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎓 Education & Certifications</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span><strong>KDI School of Public Policy and Management</strong> - MBA (2008-2010)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span><strong>한국외국어대학교</strong> - 영어과 (1987-1994)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span><strong>Design Thinking Facilitator</strong> - KAC</span>
                </li>
              </ul>
            </div>

            {/* Philosophy */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💡 멘토링 철학</h3>
              <p className="text-gray-700 italic">
                &ldquo;글로벌 기업에서의 20년 경험을 통해 배운 가장 중요한 것은,
                모든 사람이 고유한 잠재력을 가지고 있다는 것입니다.
                저의 역할은 그 잠재력을 발견하고 현실로 만들 수 있도록
                실전에서 검증된 전략과 따뜻한 격려를 함께 제공하는 것입니다.&rdquo;
              </p>
            </div>

            {/* Contact CTA */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-center text-gray-600">
                강연, 어드바이징 등 비즈니스 관련 문의는 언제든 환영합니다.
              </p>
              <p className="text-center mt-2">
                <a
                  href="mailto:jk.park@kempkorea.net"
                  className="text-teal-600 hover:text-teal-700 font-semibold"
                >
                  jk.park@kempkorea.net
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
