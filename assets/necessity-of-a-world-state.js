import { enhanceCitations, htmlIdConvert } from "~/assets/util.js";


const infoboxes = [
    {
        title: "Climate Crisis",
        slogan: "Humanity is failing to stop climate change",
        slides: [
            {
                imageSrc: '/img/climate-change/wildfire.jpg',
                caption: 'Increased rate of natural disasters.',
            },
            {
                imageSrc: '/img/climate-change/desertification.jpg',
                caption: 'Desertification advances, and droughts kill agriculture.',
            },
            {
                imageSrc: '/img/climate-change/glaciers-melting.jpg',
                caption: 'Glaciers melt, sea-level rises, albedo decreases.',
            },
            {
                imageSrc: '/img/climate-change/coal-mining.jpg',
                caption: 'Meanwhile we are still subsidizing fossil fuels.',
            },
        ],
        htmlContent: enhanceCitations(`
        <p>The climate crisis, the sixth mass extinction and the exploitation of natural resources threaten the livelihood of all human beings. For the past decades, scientists have observed an increase in temperature and in the frequency of droughts and extreme weather all around the world. \\citep{https://www.ipcc.ch/srccl/chapter/summary-for-policymakers/} The International Panel On Climate Change states that it is “necessary and even vital to maintain the global temperature increase below 1.5°C”, because otherwise so called tipping points will be crossed. \\citep{https://www.ipcc.ch/sr15/chapter/chapter-3/} Triggering these tipping points will spark a cascade of self-reinforcing events that will result in a runaway climate change and ultimately in a climate collapse. \\citep{https://www.pnas.org/content/pnas/115/33/8252.full.pdf} If this scenario occurs, the next several decades will be shaped by the effects of drastic shortages of water and nutrition, ensuing wars for these resources and frequent and devastating natural disasters like wildfires, heatwaves and floods, decimating the world’s population and causing unimaginable suffering for all humans on planet earth.</p>

        <p>Our global society must prevent this catastrophe at any cost, yet most nations are hardly budging at all. One reason for this apathy in the face of this crisis is the fact that the nations only serve their own interests and do not feel responsible for humanity as a whole. Instead of teaming up in a combined effort to combat this global problem, they demand other nations to act first. A second reason is that since nations with global influence constantly compete for more power, they are rather unwilling to make the effort to decarbonise their economies, since doing so would lead to a short-term economic disadvantage. If this status quo is maintained any longer, the climate collapse is inevitable.</p>
        
        <p>Our best chance of overcoming this international inaction is to tackle this global problem on a global scale. Because nations have set themselves objectives that they are failing to meet, we need an institution that holds them accountable and values the common good of humanity more highly than national interests. We need to establish a democratic, federal world state that is responsible for the well-being of every human on earth, has the power to forge a plan to combat the climate crisis and ensures that every nation contributes to the solution. The IPCC claims that “limiting global warming to 1.5°C would require rapid, far-reaching and unprecedented changes in all aspects of society” \\citep{https://www.ipcc.ch/2018/10/08/summary-for-policymakers-of-ipcc-special-report-on-global-warming-of-1-5c-approved-by-governments/}. These changes need to be global and need to permeate all political, social and economic structures, which is why we need to overcome the nation-state and create a federal, democratic world state.</p>
        
        <p>Our vision for the future is that humanity will unite in the task of creating a democratic, federal world state which serves as a platform, enabling us to solve global problems in a combined effort. The use and distribution of our planet’s scarce resources will be coordinated globally, preventing single nations or individuals from making a short-term profit by causing suffering for many in the long term. Humanity will overcome the status quo and start taking effective measures against the ecological crisis. The goal of creating a global society that lives in harmony with nature instead of destroying its livelihood will be the vision uniting humanity and giving new purpose and meaning to the actions we take in our daily lives.</p>
        
        `),
    },
    {
        title: "Global Inequality",
        slogan: "Everyone maximizes their own capital",
        slides: [
            {
                imageSrc: '/img/social-inequality/lack-of-education.jpg',
                caption: 'Poor education. Is it fair? No.',
            },
            {
                imageSrc: '/img/social-inequality/trading.jpg',
                caption: 'High-frequency trading. Is it fair? Neither.',
            },
            {
                imageSrc: '/img/social-inequality/bananas.jpg',
                caption: 'Child labor. Marginal pay. No future.',
            },
            {
                imageSrc: '/img/social-inequality/distribution-of-wealth.jpg',
                caption: 'Maybe life would be better for us all if we distributed wealth more equally.',
            },
            {
                imageSrc: '/img/social-inequality/dignity-healthcare.jpg',
                caption: 'Life can become horrible without social welfare',
            },
        ],
        htmlContent: enhanceCitations(`
        <p>For decades, the global society has experienced a continuous increase in the standard of living \\citep{http://hdr.undp.org/en/composite/trends} but failed to distribute its wealth across the world. This has caused severe inequality that becomes apparent when comparing income and health: the gross national income per capita in the most developed countries is 15 times higher than in the least developed countries, and the life expectancy at the higher end of the spectrum is 18 years longer than at the lower end. \\citep{http://hdr.undp.org/en/composite/HDI} Furthermore, global inequality has been increasing throughout the past years with a growing number of millionaires \\citep{https://mgmresearch.com/global-millionaire-population-analysis-2019/} on the one hand and rising poverty in Sub-Saharan Africa \\citep{https://ourworldindata.org/extreme-poverty} as well as increasing world hunger \\citep{http://www.fao.org/3/ca5162en/ca5162en.pdf} on the other hand.</p>

        <p>The rise of inequality is a direct result of the exploitative behaviour of nations of the global north. Industrial nations like the member states of the EU impose severe tariffs on processed products, forcing less wealthy nations to sell their resources and leaving them no chance of building their own industry. Coffee is just one example for this practice. The EU imposes customs of 7.5 percent and more on processed products and none on the unprocessed beans. \\citep{https://ec.europa.eu/taxation_customs/dds2/taric/taric_consultation.jsp?Lang=en&Taric=0901000000&Expand=true} Consequently African nations are forced to export them and are denied the possibility of establishing their own processing industry. Therefore they only make 1.2 billion US$ annually from coffee exports, even though Africa is the home of the plant and produces 14 percent of the world's coffee beans. Europe however makes nearly 15 billion US$ from coffee re-exports, even though they do not grow any coffee themselves. \\citep{http://www.fao.org/faostat/en/#data/QC/visualize} The revenue from coffee exports in Germany alone is almost triple that of the whole African continent. \\citep{https://comtrade.un.org/pb/downloads/2019/VolII2019.pdf} And coffee is just the beginning of a long list of products affected by similar regulations, including cacao, tobacco, cotton, metal ores and more. \\citep{https://ec.europa.eu/taxation_customs/dds2/taric/s/taric_consultation.jsp?Lang=en&Expand=true} Additionally, the African agriculture suffers because of imports from the EU. The heavily subsidized European agriculture floods African markets with incredibly cheap products that drive small local farms out of business. \\citep{http://www.tuaeu.co.uk/how-the-eu-starves-africa/}\\citep{https://www.theguardian.com/world/2016/feb/28/the-european-union-is-an-ongoing-disaster-for-africa} Further examples for the immense exploitation are European trawlers fishing extensively in African waters \\citep{https://qz.com/africa/1075063/eu-nations-authorized-their-vessels-to-fish-unlawfully-in-african-waters/} as well as European companies depleting groundwater resources, \\citep{https://www.facing-finance.org/en/database/cases/nestle-privatization-of-water/} thereby destroying the livelihood of the locals.</p>
        
        <p>The growing global inequality and the exploitation of the nations of the global south directly impact billions of humans, denying them their right to pursue a fulfilled life. Furthermore, it poses a great threat to international peace. Due to the gap between rich and poor countries widening and the effects of the climate crisis becoming more severe, the likelihood of mass migration increases. If wealthy countries continue refusing to grant asylum to these millions of people, global conflicts of unprecedented scale will occur.</p>
        
        <p>The current system is unable to solve this problem due to nations pursuing their national interests. As long as the voice of the less wealthy nations is ignored, the exploitation will continue. Even if a single country was to take the problems of the global south seriously, it would still not have the power to prevent other countries from capitalizing on the suffering of less powerful nations.<br>
        Therefore, a world state is the most promising way of combating this neocolonial behaviour. It would usher in a new era of global cooperation in which every nation could sue for their rights and negotiate on an equal footing. The well-being of every human being would be the ultimate goal determining global policies. The nations of the global north must pay serious compensations to the nations of the global south, ensuring an equal distribution of wealth.</p>
        
        <p>In the future, humankind will share planet earth as one species. Concepts such as nationalism and hard borders will be abandoned. We will share our wealth, ensuring that everyone has the same opportunities no matter where they were born. Nobody will claim dominion over a country and exclude others from living there or using its resources. Instead, every human being will have the right to call any place on earth their home.</p>
        
        `),
    }
];

export default infoboxes.map((infobox, i) => {
    return Object.assign(infobox, { htmlId: `infobox-threat-${i+1}` });
});
