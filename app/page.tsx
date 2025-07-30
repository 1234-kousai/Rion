import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Instagram, ArrowRight, Sparkles, Star, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ImageSwitcher } from "@/components/ui/image-switcher"
import Header from "@/components/header"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-purple-500/5 via-transparent to-blue-500/5 rounded-full animate-spin-slow"></div>
      </div>

      <Header />

      {/* Hero Section */}
      <section id="top" className="relative z-10 py-32 lg:py-48">
        <div className="absolute inset-0 flex items-center justify-center z-0 opacity-20">
          <Image
            src="/rion-group-watermark.png"
            alt="Rion Group Watermark"
            width={800}
            height={800}
            className="object-contain animate-pulse-slow"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Floating Elements */}
            <div className="absolute top-20 left-10 animate-float">
              <Sparkles className="w-8 h-8 text-purple-400/60" />
            </div>
            <div className="absolute top-40 right-20 animate-float-delayed">
              <Star className="w-6 h-6 text-blue-400/60" />
            </div>
            <div className="absolute bottom-20 left-1/4 animate-float-slow">
              <Zap className="w-10 h-10 text-pink-400/60" />
            </div>

            <div className="mb-8 animate-fade-in-up">
              <Badge
                variant="outline"
                className="border-purple-400/50 text-purple-300 bg-purple-500/10 backdrop-blur-sm px-6 py-2 text-sm font-medium"
              >
                PROFESSIONAL GUILD
              </Badge>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 leading-tight animate-fade-in-up delay-200">
              <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                才能に、戦略を
              </span>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                インストールする。
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-16 leading-relaxed max-w-4xl mx-auto animate-fade-in-up delay-400">
              Rion Groupは、夜の世界で本気で成功したいホスト&キャストのための
              <span className="text-transparent bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text font-semibold">
                プロフェッショナル・ギルド
              </span>
              です。
            </p>

            {/* Premium Value Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  imageSrc: "/career-shift-icon.png",
                  title: "CAREER SHIFT",
                  desc: "セカンドキャリアの設計と、その機会を提供。",
                  color: "purple",
                  delay: "delay-100",
                },
                {
                  imageSrc: "/branding-icon.png",
                  title: "BRANDING",
                  desc: "ファンを創り出す、再現性のあるSNS戦略。",
                  color: "pink",
                  delay: "delay-200",
                },
                {
                  imageSrc: "/monetize-icon.png",
                  title: "MONETIZE",
                  desc: "収入源を複線化し、経済的な安定を築く。",
                  color: "blue",
                  delay: "delay-300",
                },
                {
                  imageSrc: "/connection-icon.png",
                  title: "CONNECTION",
                  desc: "孤独を解消し、共に戦う最強の仲間と繋がる。",
                  color: "indigo",
                  delay: "delay-400",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className={`group border-0 bg-gradient-to-br from-black/50 to-black/70 backdrop-blur-xl hover:from-black/60 hover:to-black/80 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up ${item.delay}`}
                >
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div
                      className={`w-20 h-20 mx-auto mb-6 flex items-center justify-center`}
                    >
                      <Image src={item.imageSrc} alt={item.title} width={48} height={48} />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-white">{item.title}</h3>
                    <p className="text-base text-gray-300 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="animate-fade-in-up delay-600">
              <Button
                asChild
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 border-0 shadow-2xl shadow-purple-500/25 text-lg px-12 py-6 group"
              >
                <Link href="https://www.instagram.com/rion.group.official?igsh=MTk1ajAyMW5mNzdyag%3D%3D&utm_source=qr" target="_blank" className="flex items-center gap-3">
                  <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  公式Instagramで、私たちの活動を見る
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative z-10 py-32 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              <Badge
                variant="outline"
                className="mb-6 text-purple-300 border-purple-400/50 bg-purple-500/10 backdrop-blur-sm px-6 py-2"
              >
                ABOUT
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">理念（ミッション）</h2>
              <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                才能に、戦略をインストールする。
              </p>
            </div>

            <Card className="group border-0 bg-gradient-to-br from-black/50 to-black/70 backdrop-blur-xl hover:from-black/60 hover:to-black/80 transition-all duration-500 animate-fade-in-up delay-200">
              <CardContent className="p-12 md:p-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-40 h-40 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/25 group-hover:rotate-3 transition-transform duration-500">
                        <ImageSwitcher
                          images={["/kousai1.png", "/kousai2.png"]}
                          interval={2000}
                          width={150}
                          height={150}
                          alt="一ノ瀬 リオン"
                          className="rounded-2xl object-cover"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-3xl font-black mb-3 text-white">創設者プロフィール</h3>
                    <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
                      一ノ瀬 リオン | 慶應生ホスト
                    </h4>
                    <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                      昼は学生起業家、夜はホスト。慶應経済で金融とビジネスを学び、AI/DXの世界へ。
                      自ら学生団体を創設し、現在は2つの事業（企業DX支援/夜職SNSプロデュース）を率いる傍ら、
                      夜はホストとして、時にはモデルとしても活動している。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center mt-16 animate-fade-in-up delay-400">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-purple-400/50 text-purple-300 hover:bg-purple-500/20 bg-transparent backdrop-blur-sm px-8 py-4 group"
              >
                <Link href="#value" className="flex items-center gap-3">
                  Rion Groupが提供する価値を見る
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section
        id="value"
        className="relative z-10 py-32 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              <Badge
                variant="outline"
                className="mb-6 text-blue-300 border-blue-400/50 bg-blue-500/10 backdrop-blur-sm px-6 py-2"
              >
                VALUE
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">私たちが提供する、4つの資産</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  imageSrc: "/career-shift-icon.png",
                  title: "CAREER SHIFT",
                  subtitle: "次のステージへ",
                  description: "夜の世界で働く誰もが抱える「引退後」の不安を、具体的なキャリアプランへと転換させます。",
                  features: ["キャリア相談・人生設計のサポート", "独立/起業コンサル＆セカンドキャリア機会の提供"],
                  gradient: "from-purple-500 to-purple-600",
                  bgGradient: "from-purple-500/10 to-purple-600/5",
                  delay: "delay-100",
                },
                {
                  imageSrc: "/branding-icon.png",
                  title: "BRANDING",
                  subtitle: "影響力を、資産に変える",
                  description: "あなたのSNSを、熱狂的なファンが集まる「資産」へとプロデュースします。",
                  features: ["創設者リオンによる、公開SNSコンサル", "メンバー間の企画・撮影協力体制"],
                  gradient: "from-pink-500 to-pink-600",
                  bgGradient: "from-pink-500/10 to-pink-600/5",
                  delay: "delay-200",
                },
                {
                  imageSrc: "/monetize-icon.png",
                  title: "MONETIZE",
                  subtitle: "収入源を、複線化する",
                  description:
                    "この仕事での不安定な収入だけに頼るリスクを解消します。『サイドハッスル・ボード』を通じて、私たちが厳選した安全な副業案件を紹介。空いた時間で、賢く、そして安定的に稼げる手段を提供します。",
                  features: [],
                  gradient: "from-blue-500 to-blue-600",
                  bgGradient: "from-blue-500/10 to-blue-600/5",
                  delay: "delay-300",
                },
                {
                  imageSrc: "/connection-icon.png",
                  title: "CONNECTION",
                  subtitle: "孤独から、共闘へ",
                  description: "孤独になりがちなこの業界で、店の垣根を越えた、本物の「仲間」と繋がる場所です。",
                  features: ["クローズドなオンライン掲示板", "メンバー限定の定期交流会"],
                  gradient: "from-indigo-500 to-indigo-600",
                  bgGradient: "from-indigo-500/10 to-indigo-600/5",
                  delay: "delay-400",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className={`group border-0 bg-gradient-to-br from-black/50 to-black/70 backdrop-blur-xl hover:from-black/60 hover:to-black/80 transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-fade-in-up ${item.delay}`}
                >
                  <CardContent className="p-10 relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    ></div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-6 mb-8">
                        <div
                          className={`w-20 h-20 flex items-center justify-center`}
                        >
                          <Image src={item.imageSrc} alt={item.title} width={48} height={48} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-black text-white">{item.title}</h3>
                          <p
                            className={`font-semibold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                          >
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-8 leading-relaxed text-base">{item.description}</p>
                      {item.features.length > 0 && (
                        <ul className="space-y-4">
                          {item.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-4">
                              <div className={`w-3 h-3 bg-gradient-to-r ${item.gradient} rounded-full shadow-lg`}></div>
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-20 animate-fade-in-up delay-600">
              <Button
                asChild
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-500 hover:via-pink-500 hover:to-blue-500 border-0 shadow-2xl shadow-purple-500/25 text-lg px-12 py-6 group"
              >
                <Link href="https://www.instagram.com/rion.group.official?igsh=MTk1ajAyMW5mNzdyag%3D%3D&utm_source=qr" target="_blank" className="flex items-center gap-3">
                  <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  まずは公式InstagramのDMから、お気軽にご相談ください
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-t from-black via-gray-900/50 to-transparent py-20 mt-32">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-4xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6 animate-gradient-x">
              Rion Group
            </div>
            <p className="text-gray-400 mb-12 text-xl">才能に、戦略をインストールする。</p>
            <Button
              asChild
              variant="outline"
              className="border-purple-400/50 text-purple-300 hover:bg-purple-500/20 bg-transparent backdrop-blur-sm group"
            >
              <Link href="https://www.instagram.com/rion.group.official?igsh=MTk1ajAyMW5mNzdyag%3D%3D&utm_source=qr" target="_blank" className="flex items-center gap-3 px-8 py-4">
                <Instagram className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Follow us on Instagram
              </Link>
            </Button>
          </div>
          <Separator className="my-12 bg-white/10" />
          <div className="text-center text-gray-500">
            <p>&copy; 2024 Rion Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}