# wpp-ui

![Project Version](https://img.shields.io/badge/version-1.0.0-blue)
![Expo](https://img.shields.io/badge/Expo-50.0.14-blue)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![React Native](https://img.shields.io/badge/React%20Native-0.73.6-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Descrição

O projeto **wpp-ui** é uma aplicação mobile construída com React Native e Expo, que busca replicar e melhorar a interface de usuário de um conhecido aplicativo de mensagens instantâneas. Ele utiliza as tecnologias mais modernas como Tailwind CSS para estilização, NativeWind para integração com classes de Tailwind no React Native, e React Navigation para gerenciamento de rotas.

## Estrutura de Pastas

├── .gitignore
├── App.tsx
├── app.json
├── assets/
│ ├── adaptive-icon.png
│ ├── favicon.png
│ ├── icon.png
│ └── splash.png
├── babel.config.js
├── bun.lockb
├── estrutura_pasta.txt
├── package.json
├── src/
│ ├── @types/
│ │ └── nativewind.d.ts
│ ├── components/
│ │ ├── HeaderPrincipal.tsx
│ │ ├── HeaderTalk.tsx
│ │ └── List.tsx
│ ├── routes/
│ │ ├── app/
│ │ │ ├── stack.routes.tsx
│ │ │ └── tab.routes.tsx
│ │ └── routes.tsx
│ └── screens/
│ ├── atualizacoes.tsx
│ ├── configuracoes.tsx
│ ├── conversas/
│ │ └── conversa.tsx
│ ├── conversas.tsx
│ └── ligacoes.tsx
├── tailwind.config.js
└── tsconfig.json

## Tecnologias Principais

- **Expo**: Facilita o desenvolvimento e a construção de aplicativos React Native.
- **React Native**: Biblioteca para construção de interfaces móveis usando JavaScript e React.
- **Tailwind CSS**: Utilizado em conjunto com NativeWind para estilização rápida e responsiva.
- **NativeWind**: Integração do Tailwind CSS com React Native.
- **React Navigation**: Gerenciamento de navegação e rotas no aplicativo.
- **TypeScript**: Linguagem de programação utilizada para adicionar tipagem estática ao código.

## Instalação e Inicialização

### Pré-requisitos

- Node.js (v16 ou superior)
- Yarn ou NPM
- Expo CLI

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/carlosdavid0/wpp-ui.git
   cd wpp-ui
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicialize o projeto com Expo:

   ```bash
   npm start
   ```

4. Abra o aplicativo no seu dispositivo ou emulador com Expo Go.

## Uso

A aplicação permite ao usuário navegar entre diferentes telas, como conversas, configurações e atualizações, utilizando uma navegação por abas e pilhas. Aqui está um exemplo básico de como as rotas são definidas:

```typescript
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Conversa } from "screens/conversas/conversa";
import { TabRoutes } from "./tab.routes";

export type RootStackParamList = {
  Home: any;
  Conversa: any;
  profile: any;
};

export function StackRoutes() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={TabRoutes} />
      <Stack.Group>
        <Stack.Screen name="Conversa" component={Conversa} />
        <Stack.Screen name="profile" component={Conversa} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
```

## Regras de Negócio

- **Navegação**: A navegação entre as telas é gerenciada usando `React Navigation`. Cada tela possui uma configuração específica de header e layout.
- **Estilização**: Toda a estilização é feita com Tailwind CSS via NativeWind, garantindo responsividade e facilidade de manutenção.
- **Componentização**: Componentes como `HeaderPrincipal` e `List` são reutilizáveis e configuráveis, facilitando a construção de telas complexas.

## Contribuições

Contribuições são bem-vindas! Se você deseja contribuir, siga os passos abaixo:

1. Faça um fork do projeto.
2. Crie uma nova branch com a sua feature ou correção: `git checkout -b my-feature`
3. Commit suas alterações: `git commit -m 'feat: Minha nova feature'`
4. Faça um push para a branch: `git push origin my-feature`
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ❤️ por [carlosdavid0](https://github.com/carlosdavid0)
