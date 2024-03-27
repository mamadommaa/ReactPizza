import React from "react";
import ContentLoader from "react-content-loader";

const PizzaLoaderBlock = () => {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            // {...props}
        >
            <circle cx="140" cy="140" r="140" />
            <rect x="-1" y="307" rx="4" ry="4" width="280" height="28" />
            <rect x="0" y="348" rx="4" ry="4" width="280" height="61" />
            <rect x="0" y="422" rx="4" ry="4" width="73" height="29" />
            <rect x="165" y="421" rx="4" ry="4" width="113" height="29" />
        </ContentLoader>
    );
};

export default PizzaLoaderBlock;
