import { ChatWindow } from "@/components/ChatWindow";

export default function CharitableRecommendationsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        ▲ Charitable Recommendations Bounty
      </h1>
      <ul>
        <li className="text-l">
          <span className="ml-2">
            This template showcases a LangChain.js agent designed to provide charitable recommendations within a Next.js project.
          </span>
        </li>
        <li>
          <span className="ml-2">
            The agent leverages data and insights to recommend charities based on user preferences and current global needs.
          </span>
        </li>
        <li className="text-l">
          <span className="ml-2">
            You can find the logic for this use-case in <code>app/api/chat/charitablerecommendations/route.ts</code>.
          </span>
        </li>
        <li className="text-l">
          <span className="ml-2">
            The main frontend logic is found in <code>app/charitablerecommendations/page.tsx</code>.
          </span>
        </li>
        <li className="text-l">
          <span className="ml-2">
            This template is open source - you can see the source code and deploy your own version from the GitHub repo!
          </span>
        </li>
        <li className="text-l">
          <span className="ml-2">
            Try asking, e.g., <code>What are some effective environmental charities to donate to?</code> below!
          </span>
        </li>
      </ul>
      <div className="mt-8">
        <h2 className="text-2xl mb-4">Contributing:</h2>
        <p className="mb-2">
          We are actively seeking contributions to enhance the scope of our charitable search functionality. This includes, but is not limited to, improving the recommendation algorithm, expanding the database of charities, and refining the user experience.
        </p>
        <p>
          As a token of our appreciation, contributors who make significant improvements will be rewarded. Rewards range from project swag to monetary bounties, depending on the impact of the contribution. For more details on how to contribute and the rewards program, please refer to the <a href="BOUNTIES.md" className="text-blue-500 hover:underline">Bounty Board</a>.
        </p>
      </div>
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
