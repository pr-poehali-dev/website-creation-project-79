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
          backgroundImage: `linear-gradient(rgba(44, 53, 68, 0.75), rgba(44, 53, 68, 0.75)), url('https://cdn.poehali.dev/projects/2aa66e23-1238-4278-b50c-13e9ae5210a9/files/40dba8a3-7cec-4a79-942b-88e695efe371.jpg')`,
        }}
      >
        <div className="container mx-auto">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-montserrat leading-tight">
              Мясокостная мука — незаменимый элемент питания животных
            </h1>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Мука мясокостная под торговой маркой «Белковый продукт» БП прокаливались к 2000 годам являются высококачественным сырьем для комбикормов.
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
                Мы используем инновационное оборудование для контроля качества веществ на всех этапах производства.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-2">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="CheckCircle" className="text-primary" size={40} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-montserrat">Контроль на всех этапах</h3>
              <p className="text-muted-foreground">
                Ветеринарно-санитарная экспертиза, лабораторный контроль и сертификация качества на каждом этапе производства.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow border-2">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Settings" className="text-primary" size={40} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 font-montserrat">Современные технологии</h3>
              <p className="text-muted-foreground">
                Инновационные методы обработки и переработки сырья с соблюдением всех стандартов безопасности и качества.
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
                Мы применяем инновационные технологии переработки, которые позволяют выпускать высококачественную кормовую муку. Современное оборудование обеспечивает полный контроль на всех этапах производства, от приемки сырья до фасовки готовой продукции.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://cdn.poehali.dev/projects/2aa66e23-1238-4278-b50c-13e9ae5210a9/files/203e89cb-0cf3-49b3-b2ea-32065b4b6709.jpg"
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
                src="https://cdn.poehali.dev/projects/2aa66e23-1238-4278-b50c-13e9ae5210a9/files/1057eea6-bf6c-4dc8-a742-ad654aea433b.jpg"
                alt="О компании"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6 font-montserrat text-secondary">
                О компании
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                ООО «Белковый продукт» — мясной завод с опытом более 20 лет. Наша компания специализируется на производстве высококачественной белковой продукции для комбикормов. Мы обеспечиваем полный цикл производства: от закупки сырья до поставки готовой продукции покупателям.
              </p>
            </div>
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