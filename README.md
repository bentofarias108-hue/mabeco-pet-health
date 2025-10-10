# MABECO — Site Institucional

Site institucional da MABECO, empresa especializada em alimentação natural para pets.

## 🐾 Sobre o Projeto

Site responsivo desenvolvido com React, TypeScript, Tailwind CSS e shadcn/ui. Apresenta os benefícios, diferenciais e informações sobre alimentação natural para cães e gatos.

## 🎨 Características

- Design moderno e responsivo
- Otimizado para SEO
- Animações suaves
- Integração com WhatsApp
- Paleta de cores terrosas e naturais
- Acessibilidade (WCAG AA)

## 🔧 Personalização

### Substituir o número de telefone

Busque por `{{TELEFONE}}` em todos os arquivos e substitua pelo número real no formato internacional (ex: 5511999999999).

**Arquivos que contêm {{TELEFONE}}:**
- src/components/Hero.tsx
- src/components/WhatsAppButton.tsx
- src/components/CTASection.tsx
- src/components/Header.tsx

### Substituir imagens

As imagens estão em `src/assets/`. Para substituir:

1. Coloque suas novas imagens na pasta `src/assets/`
2. Atualize os imports nos componentes correspondentes
3. Mantenha os nomes ou atualize as referências

**Imagens utilizadas:**
- `hero-bg.jpg` - Imagem principal do hero
- `video-thumb.jpg` - Thumbnail da seção de vídeo
- `comparison-center.jpg` - Imagem central da comparação
- `when-offer-bg.jpg` - Background da seção "Quando oferecer"
- `section-1.jpg` - Ingredientes naturais
- `section-2.jpg` - Veterinário com pet

### Substituir logo

Atualmente usa um círculo simples com "M". Para adicionar logo real:

1. Adicione a imagem do logo em `src/assets/logo.png`
2. Edite `src/components/Header.tsx`
3. Substitua o círculo pelo import da imagem

## 📦 Instalação e Desenvolvimento

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🚀 Deploy

O projeto está configurado para deploy via Lovable.

1. Abra [Lovable Project](https://lovable.dev/projects/8c06643b-31b4-4d99-a4d9-79f6100882d2)
2. Clique em "Publish" no canto superior direito
3. Siga as instruções para publicar

### Deploy Manual

Após o build (`npm run build`), a pasta `dist/` conterá os arquivos estáticos prontos para hospedagem em qualquer servidor web.

## 📱 Redes Sociais

Atualize os links das redes sociais em `src/components/Footer.tsx`:

```tsx
<a href="https://instagram.com/seu_perfil" ...>
<a href="https://facebook.com/seu_perfil" ...>
```

## 🎯 SEO

Meta tags configuradas em `index.html`:
- Title otimizado com palavras-chave
- Meta description (max 160 caracteres)
- Open Graph tags para redes sociais
- Alt text em todas as imagens

## 📄 Estrutura de Arquivos

```
src/
├── assets/          # Imagens do site
├── components/      # Componentes React
│   ├── ui/         # Componentes shadcn/ui
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Benefits.tsx
│   ├── VideoSection.tsx
│   ├── QualityFeatures.tsx
│   ├── Comparison.tsx
│   ├── WhenToOffer.tsx
│   ├── BenefitsList.tsx
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx
├── pages/          # Páginas
│   └── Index.tsx
└── index.css       # Design system e estilos globais
```

## 🎨 Design System

Todas as cores estão definidas em `src/index.css` usando HSL:
- **Primary:** Terracota (#D4956B)
- **Accent:** Verde vibrante (#4CAF50)
- **Background:** Creme (#F7F4EF)
- **Foreground:** Marrom escuro (#442E26)

## 📞 Suporte

Para dúvidas sobre o código ou personalização, consulte a [documentação do Lovable](https://docs.lovable.dev/).

## 📝 Licença

© 2025 MABECO. Todos os direitos reservados.
