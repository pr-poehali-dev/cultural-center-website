import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("events");

  const events = [
    {
      id: 1,
      title: "Современное искусство: новые голоса",
      date: "15",
      month: "ЯНВ",
      category: "Выставка",
      image: "https://cdn.poehali.dev/projects/175c22de-17de-401a-8a14-761041518bc3/files/c7e8c8fd-7c92-4f5d-a119-4fe9ba0446d4.jpg",
      time: "18:00",
      description: "Открытие выставки молодых художников"
    },
    {
      id: 2,
      title: "Вечер классической музыки",
      date: "22",
      month: "ЯНВ",
      category: "Концерт",
      image: "https://cdn.poehali.dev/projects/175c22de-17de-401a-8a14-761041518bc3/files/94c6af8a-24a0-4c7c-8688-7deeb9d818fa.jpg",
      time: "19:30",
      description: "Симфонический оркестр представляет"
    },
    {
      id: 3,
      title: "Современный танец: эмоции в движении",
      date: "28",
      month: "ЯНВ",
      category: "Танец",
      image: "https://cdn.poehali.dev/projects/175c22de-17de-401a-8a14-761041518bc3/files/5a3debf3-0bdb-4160-97cd-406c61560e6f.jpg",
      time: "20:00",
      description: "Премьера от известной труппы"
    }
  ];

  const programs = [
    {
      icon: "Music",
      title: "Музыкальные программы",
      description: "Концерты, мастер-классы и музыкальные вечера"
    },
    {
      icon: "Palette",
      title: "Изобразительное искусство",
      description: "Выставки, воркшопы и творческие встречи"
    },
    {
      icon: "Theater",
      title: "Театр и перформанс",
      description: "Спектакли, читки и экспериментальные постановки"
    },
    {
      icon: "BookOpen",
      title: "Литературный клуб",
      description: "Встречи с авторами, обсуждения и литературные вечера"
    }
  ];

  const blogPosts = [
    {
      title: "Как искусство меняет городское пространство",
      excerpt: "Исследуем влияние культурных центров на развитие городской среды",
      date: "10 января 2026",
      author: "Анна Петрова"
    },
    {
      title: "Интервью с куратором новой выставки",
      excerpt: "Обсуждаем концепцию и идеи предстоящей экспозиции",
      date: "8 января 2026",
      author: "Михаил Соколов"
    },
    {
      title: "5 причин посетить наш культурный центр",
      excerpt: "Рассказываем о наших уникальных программах и возможностях",
      date: "5 января 2026",
      author: "Елена Волкова"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Культурный Центр
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('events')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                События
              </button>
              <button 
                onClick={() => scrollToSection('programs')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Программы
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Галерея
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Блог
              </button>
              <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                Купить билет
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
              Пространство для творчества и вдохновения
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Откройте мир искусства, культуры и креативности в нашем современном культурном центре
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8"
                onClick={() => scrollToSection('events')}
              >
                <Icon name="Calendar" className="mr-2" size={20} />
                Посмотреть афишу
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Play" className="mr-2" size={20} />
                Виртуальный тур
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Предстоящие события</h2>
            <p className="text-xl text-muted-foreground">Не пропустите яркие мероприятия этого месяца</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card 
                key={event.id} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-lg px-4 py-2 shadow-lg">
                    <div className="text-3xl font-bold text-primary">{event.date}</div>
                    <div className="text-sm text-muted-foreground font-semibold">{event.month}</div>
                  </div>
                  <Badge className="absolute top-4 right-4 bg-accent text-white">
                    {event.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    <div className="flex items-center gap-2 mt-2">
                      <Icon name="Clock" size={16} />
                      {event.time}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Купить билет
                    <Icon name="ArrowRight" className="ml-2" size={16} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши программы</h2>
            <p className="text-xl text-muted-foreground">Разнообразие творческих направлений для всех</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={program.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Галерея</h2>
            <p className="text-xl text-muted-foreground">Моменты из жизни нашего центра</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...events.map(e => e.image), ...events.map(e => e.image)].map((image, index) => (
              <div 
                key={index}
                className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
              >
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <Icon name="ZoomIn" className="text-white" size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наш блог</h2>
            <p className="text-xl text-muted-foreground">Новости, статьи и истории из мира культуры</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" size={14} />
                    {post.date}
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="User" size={14} />
                    <span className="font-medium">{post.author}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">Культурный Центр</span>
              </div>
              <p className="text-background/70">
                Пространство для творчества и культурного развития
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Навигация</h3>
              <ul className="space-y-2 text-background/70">
                <li><a href="#events" className="hover:text-background transition-colors">События</a></li>
                <li><a href="#programs" className="hover:text-background transition-colors">Программы</a></li>
                <li><a href="#gallery" className="hover:text-background transition-colors">Галерея</a></li>
                <li><a href="#blog" className="hover:text-background transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-background/70">
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Москва, ул. Культурная, 15
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@culturecenter.ru
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Социальные сети</h3>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors cursor-pointer">
                  <Icon name="Instagram" size={20} />
                </div>
                <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors cursor-pointer">
                  <Icon name="Facebook" size={20} />
                </div>
                <div className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors cursor-pointer">
                  <Icon name="Youtube" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-background/10 mt-8 pt-8 text-center text-background/70">
            <p>© 2026 Культурный Центр. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
