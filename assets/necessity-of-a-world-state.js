import { enhanceCitations } from "~/assets/util.js";


export const infobox_ClimateChange = {
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
        <p>Climate change and associated problems \\citep{https://google.de} like the sixth mass extinction and the exploitation of natural resources threaten the natural livelihood of all human beings. Fighting climate change will only be effective for the next 10 years, according to the IPCC. From there on critical tipping points will be reached, triggering a cascade of self reinforcing events that will result in a climate collapse. Within the next 5 decades, a drastic shortage of water and nutrition, the resulting wars for these resources and the devastating effects of natural disasters, like wildfires and floods, will decimate the world population and cause unimaginable suffering for all humans on earth.</p>
        <p>To prevent this catastrophe, every nation on earth has to contribute with all their power. But since spending the money and effort needed to decarbonize a country is a short term disadvantage in the global economic competition, no nation is willing to act sufficiently. This social phenomenon is known as “tragedy of the commons”. It states that every country will blame others for not acting, rather than taking measures itself. This egoistic approach of maximizing short term benefits is causing global inaction that will inevitably lead to the climate collapse in the long term.</p>
        <p>This problem can only be solved if the common good is valued higher than national interests. Since nations will close their eyes to international problems, a united global government is needed to fight this global crisis. It will forge a global plan to combat the climate crisis and make sure that every country plays its role. The whole world contributed to this problem, now the whole world needs to contribute to the solution.</p>
        <p>In the future, the use of global resources has to be coordinated globally. This will prevent a handful of people from making a profit in the short term by causing suffering for many in the long term. In addition, unprecedented levels of international cooperation will finally enable smart global energy and resource utilisation.</p>
    `),
};


export const infobox_SocialInequality = {
    title: "Social Inequality",
    slogan: "Everyone maximizes the own capital",
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
    htmlContent: `
        <p>After decades of economic growth, humanity has only been able to increase the standard of living on average, but failed to distribute its wealth across the world. While the nations of the global north achieve ever higher standards of living, especially for a few extremely wealthy individuals, most nations in the “developing world” are unable to prosper. The wealthy nations are dictating the prices and the products they want to buy by imposing tariffs and threatening to buy products from cheaper selling competitors. This forces less wealthy nations to exploit their natural resources and their people.</p>
        <p>Not only does this form of exploitation waste the potential of the exploited countries and does therefore restrain the growth of the global wealth, but it also constitutes a substantial threat to international social peace. Due to the gap between rich and poor countries widening and the effects of the climate crisis becoming more severe, the likelihood of mass migration increases. If wealthy countries then refuse to grant asylum to millions of people, global conflicts of unimaginable extent will occur.</p>
        <p>All of that aside it is simply unjust that a child which is coincidentally born in a less wealthy country, is faced with exploitation and suffering, whilst someone born in an industrialized nation lives happily at the expense of these children. If they for that reason cannot sustain an appropriate standard of living and they try to seek asylum within a nation of the global north, they will be considered “economic refugees” and therefore deported back to their country.</p>
        <p>The current system is unable to solve this problem due to nations pursuing national interests. Even if a national state decided to stop exploiting less wealthy countries, the problem would remain unsolved as long as other nations continue to capitalize on the weakness of the poor. The nation trying to help poorer countries would lose power, decrease its standard of living and become less competitive. If however all nations started cooperating and every human on earth had an equal voice, the short term sacrifices that wealthier nations would have to make would be outweighed by the long term growth and equal distribution of global wealth. Forming a world government is inevitable to ensure the democratic distribution of wealth. The resources and technology currently available to the world is sufficient to provide an appropriate standard of living to every human on earth. We just fail to distribute our wealth.</p>
        <p>In the future, humanity will collaboratively and democratically share resources and provide a high quality of life for every human on earth. Extreme accumulation of wealth will be prohibited and the arbitrary order of living standard based on the country one was born in will be abolished. We will invest in the potential that every human being innately carries. Everyone deserves a happy, fulfilled and self-determined life.</p>
    `,
};









// kopier-vorlage

// export const infobox_SocialInequality = {
//     slides: [
//         {
//             imageSrc: '',
//             caption: '',
//         },
//     ],
//     slogan: "",
//     paragraphs: [
//         ``,
//     ],
// };