import TEXTS from "@/i18n/topBanner.json";
import ReactMarkdown from "react-markdown";

const TopBarInfo = () => {
  return (
    <section
      aria-label="Frijol Mágico"
      className="w-full font-sans md:fixed md:top-0 flex flex-col sm:flex-row space-y-4 md:space-y-0 px-4 sm:px-6 items-center justify-between py-4 sm:py-2 bg-foreground relative z-40"
    >
      <div className="flex space-x-4 flex-nowrap">
        <h2 className="text-background w-full 2md:max-w-fit leading-none 2md:leading-normal text-center">
            <ReactMarkdown components={{
             p: ({children}) => <>{children}</>   
            }}>
                {TEXTS.text}
            </ReactMarkdown>
        </h2>
      </div>
      <a
        href={TEXTS.button.link}
        className="py-0.5 px-4 rounded-lg font-bold bg-gradient-to-r text-secondary-foreground from-secondary to-accent [background-size:150%] hover:bg-right transition-[background-position] duration-200"
      >
        {TEXTS.button.text}
      </a>
    </section>
  );
};

export default TopBarInfo;
