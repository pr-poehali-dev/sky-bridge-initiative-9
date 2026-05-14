import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Марина, 34 года",
    role: "Менеджер, Москва",
    avatar: "/professional-woman-scientist.png",
    content:
      "Наконец-то понимаю, почему в определённые дни голова раскалывается. Теперь проверяю график с утра — как погоду. Очень помогает планировать день.",
  },
  {
    name: "Алексей, 41 год",
    role: "Предприниматель, Санкт-Петербург",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Жена страдает от метеочувствительности. Сервис простой и понятный — смотрим вместе каждое утро. Уведомления приходят вовремя, это реально спасает.",
  },
  {
    name: "Ольга, 28 лет",
    role: "Дизайнер, Екатеринбург",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Никакой воды и сложных терминов. Цвет сразу говорит: сегодня норм или лучше полежать. Пользуюсь каждый день уже полгода.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят пользователи</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Люди 20–50 лет, которые уже следят за магнитными бурями
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}