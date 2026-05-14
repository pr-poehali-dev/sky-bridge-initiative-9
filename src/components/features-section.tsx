import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "График в реальном времени",
    description: "Актуальные данные K-индекса обновляются каждые 3 часа. Видишь текущую активность и прогноз на 3 дня вперёд.",
    icon: "zap",
    badge: "Live",
  },
  {
    title: "Уведомления о бурях",
    description: "Пуш-уведомление за 6 часов до начала магнитной бури — успей подготовиться и принять меры.",
    icon: "brain",
    badge: "Алерт",
  },
  {
    title: "Влияние на самочувствие",
    description: "Понятные советы: что делать при каждом уровне активности — от «всё хорошо» до «держись».",
    icon: "link",
    badge: "Здоровье",
  },
  {
    title: "Шкала понятно для всех",
    description: "Уровни от 1 до 5 цветом и эмодзи — никаких «нТл» и научных терминов, только ясность.",
    icon: "globe",
    badge: "Просто",
  },
  {
    title: "История и статистика",
    description: "Архив магнитной активности за год помогает понять паттерны и заметить связь с самочувствием.",
    icon: "target",
    badge: "Архив",
  },
  {
    title: "Без регистрации",
    description: "Открыл — увидел. Никаких аккаунтов, паролей и форм. Данные доступны мгновенно.",
    icon: "lock",
    badge: "Быстро",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Всё, что нужно знать о буре</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Простой и понятный сервис для тех, кто хочет быть в курсе геомагнитной обстановки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}