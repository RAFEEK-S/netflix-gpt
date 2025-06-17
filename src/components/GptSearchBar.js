import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  // const handleGptSearchClick = async () => {
  //   console.log(searchText.current.value);

  //   const gptQuery =
  //     "Act as a Movie Recommendation system and suggest some movies for the query :" +
  //     searchText.current.value +
  //     ".only give me names of 5 movies, comma separated like the example results given ahead. Example Result: Gadar,Sholay,Don,Golmaal,koi mil gaya ";

  //   const gptResults = await openai.chat.completions.create({
  //     messages: [{ role: "user", content: gptQuery }],
  //     model: "gpt-3.5-turbo",
  //   });
  //   console.log(gptResults.choices);
  // };
  return (
    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2  ">
      <form
        className="flex border border-spacing-2 border-purple-200 w-full rounded-lg  "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 w-96 mx-2 my-2 text-xl outline-none"
          placeholder={lang[langKey].gptSearchPlacehoder}
        />
        <button
          className="px-2 py-3 bg-red-700 w-32 my-2 mx-2 text-white"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
