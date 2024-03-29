import { ChatWindow } from "@/components/ChatWindow";

export default function CharitableRecommendationsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        ▲ Next.js + LangChain.js Charitable Recommendations 🦜🔗
      </h1>
      <ul>
        <li className="text-l">
          🤝
          <span className="ml-2">
            This template showcases a LangChain.js agent designed to provide charitable recommendations within a Next.js project.
          </span>
        </li>
        <li>
          💡
          <span className="ml-2">
            The agent leverages data and insights to recommend charities based on user preferences and current global needs.
          </span>
        </li>
        <li className="text-l">
          💻
          <span className="ml-2">
            You can find the logic for this use-case in <code>app/api/chat/charitablerecommendations/route.ts</code>.
          </span>
        </li>
        <li className="text-l">
          🎨
          <span className="ml-2">
            The main frontend logic is found in <code>app/charitablerecommendations/page.tsx</code>.
          </span>
        </li>
        <li className="text-l">
          🐙
          <span className="ml-2">
            This template is open source - you can see the source code and deploy your own version from the GitHub repo!
          </span>
        </li>
        <li className="text-l">
          👇
          <span className="ml-2">
            Try asking, e.g., <code>What are some effective environmental charities to donate to?</code> below!
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/charitablerecommendations"
      emptyStateComponent={InfoCard}
      placeholder="Ask me for charitable recommendations based on your interests!"
      emoji="💖"
      titleText="Charity Recommender"
    ></ChatWindow>
  );
}
