import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Что такое магнитная буря и откуда берутся данные?",
      answer:
        "Магнитная буря — это возмущение магнитного поля Земли, вызванное солнечным ветром. Данные берутся из официальных источников: NOAA (США) и Росгидромет. Обновляются каждые 3 часа.",
    },
    {
      question: "Что такое K-индекс и как его читать?",
      answer:
        "K-индекс — шкала геомагнитной активности от 0 до 9. 0–1: спокойно, 2–3: слабая активность, 4: умеренная буря, 5–6: сильная буря, 7–9: экстремальная буря. На сайте всё показано цветом — зелёный, жёлтый, красный.",
    },
    {
      question: "Как магнитные бури влияют на самочувствие?",
      answer:
        "У метеочувствительных людей во время бурь могут возникать головные боли, слабость, перепады давления, нарушения сна. Это не опасно, но зная о буре заранее — можно скорректировать нагрузку и режим.",
    },
    {
      question: "Как включить уведомления о бурях?",
      answer:
        "Нажмите кнопку «Уведомить меня» на главной странице и разрешите пуш-уведомления в браузере. Всё — больше ни одна буря вас не застанет врасплох.",
    },
    {
      question: "Сервис бесплатный?",
      answer:
        "Да, базовый функционал полностью бесплатен: текущий график, прогноз и советы по самочувствию. Уведомления и расширенная история — тоже без оплаты.",
    },
    {
      question: "Данные актуальны для всей России?",
      answer:
        "Геомагнитные бури носят глобальный характер — данные актуальны для всей территории России, СНГ и в целом для жителей средних широт.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что хотели знать о магнитных бурях, K-индексе и влиянии на здоровье.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}