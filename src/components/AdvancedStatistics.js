import React from "react";
import StatisticItem from "./StatisticItem";
import ShortenInput from "./ShortenInput";

const statisticsArr = [{
  icon: './images/icon-brand-recognition.svg',
  heading: 'Brand Recognition',
  par: "Boost your brand recogniion with each click. Generic links don't mean a thing. Branded links help instil confidence in your isContentEditable."
}, {
  icon: './images/icon-detailed-records.svg',
  heading: 'Detailed Records',
  par: "Gain insights into who is clicking your links.Knowing when and where people engage with your conent helps inform beter decisions."
}, {
  icon: './images/icon-fully-customizable.svg',
  heading: 'Fully Customizable',
  par: "Imporve brand awarness and content discoberabilty through customizable links, supercharging audience engagement."
}];


const AdvancedStatistics = () => {
  return (
    <section className="statistics">
      <div className="container">
        <ShortenInput />
        <div className="text">
          <h2>Advanced Statistics</h2>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className="statistic-grid">
          {
            statisticsArr.map((item, i) => (
              <StatisticItem
                key={i}
                icon={item.icon}
                heading={item.heading}
                par={item.par}
              />
            ))
          }
          {/*<hr />*/}
        </div>
      </div>
    </section>
  );
};

export default AdvancedStatistics;