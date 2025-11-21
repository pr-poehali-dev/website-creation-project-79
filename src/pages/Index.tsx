import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="bg-secondary py-4 px-6 fixed w-full top-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/bb9d6a2b-316f-4563-a3e5-877201ea1731.png" 
              alt="Белковый продукт" 
              className="h-12"
            />
          </div>
          <nav className="hidden md:flex gap-8 text-white font-montserrat">
            <a href="#main" className="hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="hover:text-primary transition-colors">О компании</a>
            <a href="#production" className="hover:text-primary transition-colors">Продукция</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
        </div>
      </header>

      <section 
        id="main"
        className="relative pt-24 pb-16 px-6 bg-cover bg-center min-h-[600px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(44, 53, 68, 0.75), rgba(44, 53, 68, 0.75)), url('https://cdn.poehali.dev/projects/2aa66e23-1238-4278-b50c-13e9ae5210a9/files/7f1f946b-30cb-44c8-b5a6-64412a3a9731.jpg')`,
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-montserrat leading-tight">
              Мясокостная мука — незаменимый элемент питания животных
            </h1>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              ООО «Белковый продукт» с 2000 года производит высококачественную мясокостную муку — незаменимый белковый компонент для производства комбикормов и кормов для непродуктивных животных.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-2">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Package" className="text-primary" size={40} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-montserrat">Высокое качество сырья</h3>
              <p className="text-muted-foreground">
                Строгий отбор сырья и многоступенчатая система контроля качества гарантируют высокие показатели белка и усвояемости продукции.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-2">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="CheckCircle" className="text-primary" size={40} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-montserrat">Полный контроль качества</h3>
              <p className="text-muted-foreground">
                Собственная лаборатория проводит анализ каждой партии. Ветеринарно-санитарная экспертиза и сертификация на всех этапах.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-2">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Settings" className="text-primary" size={40} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-montserrat">Современное производство</h3>
              <p className="text-muted-foreground">
                Европейское оборудование и передовые технологии термической обработки обеспечивают стабильное качество готовой продукции.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="production" className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 font-montserrat text-secondary">
                Технология производства
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Производство оснащено современным европейским оборудованием для переработки мясного сырья. Многоступенчатая термическая обработка при температуре до 133°C уничтожает патогенную микрофлору и обеспечивает биологическую безопасность продукции. Автоматизированная система контроля гарантирует стабильность характеристик на выходе.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://cdn.poehali.dev/projects/2aa66e23-1238-4278-b50c-13e9ae5210a9/files/dee30fbe-66fa-4c1b-91e4-1ee98bfc9e5f.jpg"
                alt="Технология производства"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <img 
                src="https://cdn.poehali.dev/projects/2aa66e23-1238-4278-b50c-13e9ae5210a9/files/dd1557ae-e40d-4d6a-a863-c70ece05259f.jpg"
                alt="О компании"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6 font-montserrat text-secondary">
                О компании
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                ООО «Белковый продукт» работает на рынке с 2000 года. Наше предприятие специализируется на глубокой переработке мясного сырья и производстве белковых кормовых компонентов.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Производственная мощность — до 330 тонн готовой продукции в месяц. Мы поставляем мясокостную муку ведущим комбикормовым заводам и производителям кормов для домашних животных по всей России.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="production" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center font-montserrat text-secondary">Наша продукция</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://cdn.poehali.dev/projects/2aa66e23-1238-4278-b50c-13e9ae5210a9/files/28585f9a-9e6d-4077-b8a5-1db997f6e098.jpg"
                alt="Мясокостная мука"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4 font-montserrat text-secondary">Мясокостная мука</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Высокобелковый кормовой ингредиент для производства комбикормов и кормов для домашних животных. Содержание сырого протеина — не менее 50%, жира — не более 18%.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-muted-foreground">Соответствует ГОСТ 17536-82</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-muted-foreground">Упаковка: биг-бэги по 500-1000 кг, мешки по 30-50 кг</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-muted-foreground">Срок годности: 12 месяцев при соблюдении условий хранения</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://cdn.poehali.dev/projects/2aa66e23-1238-4278-b50c-13e9ae5210a9/files/bf6a1b03-ada0-4a47-8a1b-f98aabf223d4.jpg"
              alt="Упаковка продукции"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-6 bg-secondary text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center font-montserrat">Контакты</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <a href="tel:+74952214640" className="flex items-center gap-3 text-lg hover:text-primary transition-colors">
              <Icon name="Phone" size={24} />
              +7 (495) 221-46-40
            </a>
            <span className="hidden md:block text-2xl">|</span>
            <a href="mailto:info@mitmil.su" className="flex items-center gap-3 text-lg hover:text-primary transition-colors">
              <Icon name="Mail" size={24} />
              info@mitmil.su
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-primary py-6 px-6 text-white text-center">
        <p>© 2026 Белковый Продукт. Все права защищены</p>
      </footer>
    </div>
  );
};

export default Index;