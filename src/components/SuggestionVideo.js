import React from "react";

const SuggestionVideo =()=>{
  const urlList = [
    {
      src: `https://www.youtube.com/embed/ufPCITfUQnQ?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `CSS-in-JS — Max Stoiber`,
    },
    {
      src: `https://www.youtube.com/embed/v1JAUiqskiw?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Modern Forms in React — Erik Rasmussen`,
    },
    {
      src: `https://www.youtube.com/embed/N0wHweOu-LQ?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Engineering led design — Lauren Argenta`,
    },
    {
      src: `https://www.youtube.com/embed/xxbc3wAztl0?list=PLMY9nrA_sDPrVDt46wA15QuAIoAcfBI-N`,
      title: `Rethinking Design Practices — Mark Dalgleish`,
    },
  ];
    return(
      <div>
        {urlList.map((list, key) => 
        (
          <div key={key}>
            <div>
          <iframe width="50" height="50"
        src={list.src}
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write;
        encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
        </iframe>
        </div>
        <div><h6>{list.title}</h6></div>
        </div>
        ))}
      </div>
    )
}

export default SuggestionVideo