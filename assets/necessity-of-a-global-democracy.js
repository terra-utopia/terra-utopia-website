import { enhanceCitations, htmlIdConvert } from "~/assets/util.js";


const infoboxes = [
    {
        title: "Climate Crisis",
        slogan: "Humanity is failing to stop climate change",
        slides: [
            {
                imageSrc: '/img/climate-change/wildfire.jpg',
                caption: 'The climate crisis increases the frequency of natural disasters.',
            },
            {
                imageSrc: '/img/climate-change/desertification.jpg',
                caption: 'Further warming will lead to massive food and warter shortages everywhere on earth.',
            },
            {
                imageSrc: '/img/climate-change/machine-gun.jpg',
                caption: 'Ensuing wars for these resources will devastate the world.',
            },
            {
                imageSrc: '/img/climate-change/coal-mining.jpg',
                caption: 'Meanwhile nations are still trying to capitalize on this catastrophe.',
            },
        ],
        htmlContent: enhanceCitations(`
        <p>The climate crisis, the sixth mass extinction and the exploitation of natural resources threaten the livelihood of all human beings. For the past decades, scientists have observed an increase in temperature and in the frequency of droughts and extreme weather all around the world. \\citep{https://www.ipcc.ch/srccl/chapter/summary-for-policymakers/} The International Panel On Climate Change states that it is "necessary and even vital to maintain the global temperature increase below 1.5°C", because otherwise so called tipping points will be crossed. \\citep{https://www.ipcc.ch/sr15/chapter/chapter-3/} Triggering these tipping points will spark a cascade of self-reinforcing events that will result in a runaway climate change and ultimately in a climate collapse. \\citep{https://www.pnas.org/content/pnas/115/33/8252.full.pdf} If this scenario occurs, the next several decades will be shaped by the effects of drastic shortages of water and nutrition, ensuing wars for these resources, mass migration and frequent and devastating natural disasters like wildfires, heatwaves and floods, decimating the world’s population and causing unimaginable suffering for all humans on planet earth.</p>
        <br>
        <p>Our global society must prevent this catastrophe at any cost, yet most nations are hardly budging at all. One reason for this apathy in the face of this crisis is the fact that the nations only serve their own interests and do not feel responsible for all of humanity. Instead of teaming up in a combined effort to combat this existential threat, they demand other nations to act first. A second reason is that since nations with global influence constantly compete for more power, they are rather unwilling to make the effort to decarbonise their economies, since doing so would lead to a short-term economic disadvantage. If this status quo is maintained any longer, the climate collapse is inevitable.</p>
        <br>
        <p>Our best chance of overcoming this international inaction is to tackle this global problem on a global scale. Because nations have set objectives that they are failing to meet, we need an institution that holds them accountable and values the common good of humanity higher than national interests. We need to establish a global, federal democracy that is responsible for the well-being of every human on earth, has the power to forge a plan to combat the climate crisis and ensures that every nation contributes to the solution. The IPCC claims that "limiting global warming to 1.5°C would require rapid, far-reaching and unprecedented changes in all aspects of society" \\citep{https://www.ipcc.ch/2018/10/08/summary-for-policymakers-of-ipcc-special-report-on-global-warming-of-1-5c-approved-by-governments/}. These changes need to be global and need to permeate all political, social and economic structures, which is why we need to overcome the nation-states and create a global democracy.</p>
        <br>
        <p>Our vision for the future is that humanity will unite under the banner of Terra which serves as a democratic platform, enabling us to solve global problems in a combined effort. The use and distribution of our planet’s scarce resources will be coordinated globally, preventing single nations or individuals from making a short-term profit by causing suffering for many in the long term. Humanity will overcome the status quo and start taking effective measures against the ecological crisis. The goal of creating a global society that lives in harmony with nature instead of destroying its livelihood will be the vision uniting humanity and giving new purpose and meaning to the actions we take in our daily lives.</p>
        `),
    },
    {
        title: "War And Weapons Of Mass Destruction",
        slogan: "",
        slides: [
            {
                imageSrc: '/img/weapons-of-mass-destruction/shooting.jpg',
                caption: 'We humans waste precious resources on killing each other.'
            },
            {
                imageSrc: '/img/weapons-of-mass-destruction/bomb.jpg',
                caption: 'Today\'s nukes are 1000 times more destructive than the Hiroshima bomb.'
            },
            {
                imageSrc: '/img/weapons-of-mass-destruction/destruction2.jpg',
                caption: 'A major nuclear war would probably end modern civilisation.'
            },
            {
                imageSrc: '/img/weapons-of-mass-destruction/knotted-gun.jpg',
                caption: 'By creating a global democracy we will achieve world peace for the first time in human history.'
            }
        ],
        htmlContent: enhanceCitations(`
        <p>Since the Second World War, leading scientists have been warning about weapons of mass destruction being the greatest and most imminent threat to our global society. \\citep{https://thebulletin.org/doomsday-clock/timeline/} Nuclear, chemical and biological weapons are capable of wiping out entire cities \\citep{https://www.nucleardarkness.org/warconsequences/effectof300kiloton/} anywhere on earth. Studies suggest that a small-scale nuclear conflict "in which 100 Hiroshima-size (15 kiloton) nuclear weapons are detonated" would leave hundreds of millions of people starving to death all around the world because of food shortages caused by the ensuing nuclear winter. \\citep{https://www.nucleardarkness.org/warconsequences/fivemilliontonsofsmoke/} However, those few nuclear weapons make up less than 0.03% of the global arsenal, \\citep{https://climate.envsci.rutgers.edu/pdf/acp-7-2003-2007.pdf} with the largest nuclear weapon ever tested being one thousand times more destructive. \\citep{https://www.nuclearweaponarchive.org/Usa/Tests/Castle.html} A major nuclear war would most likely render planet earth uninhabitable to humankind within a few days and thus abruptly end modern civilisation. \\citep{https://www.nucleardarkness.org/warconsequences/hundredfiftytonessmoke/}</p>
        <p>Contributing to this dire situation is the fact that the public is largely unaware of the nuclear threat. The debate about regulations of weapons of mass destruction has almost completely fallen silent and many people believe that this threat is a thing of the past. \\citep{https://thebulletin.org/2016/03/why-young-people-think-nuclear-weapons-are-history/} However, largely unnoticed by the public, the industrialized nations are already waging a new form of war against one another today - cyber war. \\citep{https://www.npr.org/sections/thetwo-way/2012/06/01/154162121/as-the-worm-turns-cybersecurity-expert-tracks-blowback-from-stuxnet?t=1624887009591} \\citep{https://thebulletin.org/2019/06/the-existential-threat-from-cyber-enabled-information-warfare/} Some experts predict that this type of warfare could inadvertently kick off a nuclear conflict between the major nuclear powers. If one of them found malicious software in their nuclear defense or early warning systems and attributed that code to another superpower an escalation spiral could arise that would lead to the deployment of nuclear weapons. \\citep{https://www.youtube.com/watch?v=TmlBkW6ANsQ} This is one of the reasons why atomic scientists warn "that the international security situation is now more dangerous than it has ever been, even at the height of the Cold War." \\citep{https://thebulletin.org/doomsday-clock/2020-doomsday-clock-statement/} </p>
        <p>To make matters worse, recent developments have meant that the portfolio of weapons of mass destruction has grown continuously. New technologies such as lethal autonomous weapons \\citep{https://www.stopkillerrobots.org/learn/} are barely known to the public, yet they pose new, unforeseen threats. An open letter co-signed by Stephan Hawking, Elon Musk, and other reputable scientists and engineers, argues that since "unlike nuclear weapons, [lethal autonomous weapons] require no costly or hard-to-obtain raw materials" they will become "cheap [...] to mass-produce" and accessible to "terrorists, dictators [and] warlords". \\citep{https://futureoflife.org/open-letter-autonomous-weapons}</p>
        <p>Even more worrying, however, is that as war becomes more automated, so-called "flash wars" could occur. If a system reacts autonomously to an attack by another autonomous weapon, the situation could escalate by accident and involve more and more participants before a human could even intervene. \\citep{https://ecfr.eu/article/Flash_Wars_Where_could_an_autonomous_weapons_revolution_lead_us/} In this way, even nuclear war could be triggered without humans making the decision.</p>
        <br>
        <p>Our global society must ban all of these existential threats and achieve stable and lasting world peace. Instead international tensions are growing \\citep{https://www.cfr.org/global-conflict-tracker/?category=usConflictStatus}, global military spendings are rising \\citep{https://reliefweb.int/sites/reliefweb.int/files/resources/fs_2104_milex_0.pdf} and efforts of disarmament are stagnating or even failing with nations withdrawing from nuclear deals \\citep{https://www.nytimes.com/2018/05/08/world/middleeast/trump-iran-nuclear-deal.html}, running their own, new nuclear programs \\citep{https://www.theatlantic.com/international/archive/2017/11/north-korea-nuclear/547019/} or announcing more advanced missile technology \\citep{https://www.bbc.com/news/world-europe-50927648}. These recent developments only increase the already outrageous "potential for the world to stumble into nuclear war" that experts vigorously warn about. \\citep{https://thebulletin.org/doomsday-clock/current-time/}</p>
        <br>
        <p>This threat of war and mass destruction is a direct consequence of the existence of national states and humankind has the power to eliminate it. These weapon systems have been developed and produced by and for nations in order to help them gather power and enforce their own interests. By creating a global, federal democracy, all weapons of mass destruction become superfluous and their further production will cease.</p>
        <br>
        <p>The future objective will be to solve all international conflicts in a peaceful and democratic manner mediated by Terra’s ambassadors and global courts. Humanity will overcome the anarchy that currently is the international order and abandon the military as a whole. The military will instead be transformed into a global crisis response force fighting humanitarian crises around the world and therefore ensuring peace, stability and democratic values. A relatively small global police will be sufficient in order to guard global peace and fight terrorism. Because of this effort of national disarmament, all major wars and military conflicts will eventually come to an end. The money, time and effort humans are currently investing in developing evermore effective ways of killing each other will be spent on fighting climate change, tackling other issues and increasing human welfare.</p>
        `),
    },
    {
        title: "Multinational Mega Corporations",
        slogan: "",
        slides: [
            {
                imageSrc: "/img/mega-companies/skyscraper2.jpg",
                caption: "Some multinational mega corporations possess more power than many national states."
            },
            {
                imageSrc: "/img/mega-companies/dollars.jpg",
                caption: "In their pursuit of endless growth, they undermine democracies and markets worldwide."
            },
            {
                imageSrc: "/img/mega-companies/cooperation.jpg",
                caption: "We must globalize democracy if we want to protect it and build an economy for the common good."
            }
        ],
        htmlContent: enhanceCitations(`
        <p>For the past two decades, digitalisation and automation have led to a handful of companies growing at an alarming rate. Most of them are IT companies benefiting from  the "network effect", a concept describing that the value a user derives from a digital service depends on the number of users utilizing that same service. \\citep{https://online.hbs.edu/blog/post/what-are-network-effects} For example, no one will be interested in a small messenger that none of their friends use or shop at an online retailer that has only a very limited assortment if they can connect with millions of people on Facebook or choose from an unlimited supply of products on Amazon. A second reason for the extreme growth of a few companies is that in today’s economy, due to the vast costs of achieving economies of scale, the importance of massive capital is ever increasing, favoring big conglomerates and forcing smaller businesses out of the market. Due to these characteristics of modern tech companies, they tend to form large monopolies with virtually no competition.</p>
        <br>
        <p>These developments cause a vast variety of issues that will only become worse in the future.</p>
        <p>One great problem is the overwhelming direct lobbying power that these companies have. Giant corporations have the liquidity to drastically influence politics and the public debate by funding news outlets and think tanks advocating for their ideas \\citep{https://www.motherjones.com/environment/2005/05/some-it-hot/} or by donating large amounts of money to political parties who, in return, stand up for their interests. \\citep{https://priceofoil.org/fossil-fuel-industry-influence-in-the-u-s/} \\citep{https://www.nytimes.com/2017/06/03/us/politics/republican-leaders-climate-change.html}</p>
        <p>Secondly, most single nations are unable to regulate these giant tech companies, since imposing strong regulation would just cause them to move somewhere else, thus severely damaging the economy. \\citep{https://www.independent.co.uk/news/business/news/apple-taxes-ireland-eu-commission-tax-ruling-appeal-explained-a7483981.html}\\citep{https://www.bbc.com/news/world-europe-37299430} Because the nations are competing for these corporations and want them to establish facilities in their territories, they lower their standards, try to undercut competing nations by offering the lowest taxes and turn a blind eye when the businesses violate laws or conditions, a situation known as the "race to the bottom". \\citep{https://www.investopedia.com/terms/r/race-bottom.asp}\\citep{https://www.economist.com/free-exchange/2013/11/27/racing-to-the-bottom} Moreover, some companies grow to an extent where they are deemed "too big to fail", meaning that the countries they operate in could not afford to let them go bankrupt without causing a major economic crisis. \\citep{https://www.thebalance.com/too-big-to-fail-3305617} This basically grants these corporations a carte blanche, making them immune to consequences for unlawful activity because they will be bailed out in case of heavy losses.</p>
        <p>The third concern is that these giant companies crush their competition by either competing with rivals on their own platforms, which gives them an absurd advantage \\citep{https://www.nytimes.com/2020/10/06/technology/congress-big-tech-monopoly-power.html}\\citep{https://www.nytimes.com/2018/06/23/business/amazon-the-brand-buster.html}, or by simply buying up startups that might become competitors in the future \\citep{https://techcrunch.com/2020/07/31/house-antitrust-investigation-documents}\\citep{https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3746728}.</p>
        <p>And lastly, such large enterprises have the power to seek and exploit every single loophole in the global, heterogenous tax system, allowing them to legally but illegitimately avoid billions in taxes every year. \\citep{https://www.theguardian.com/business/2020/oct/26/big-tech-accused-of-avoiding-28bn-in-tax-to-poorest-countries}</p>
        <p>These four issues boil down to two major threats: the subverting of fundamental principles of our economic system and the undermining of our democracy.</p>
        <p>If the multinational megacorporations can crush all rivals and can always rely on being bailed out in case of heavy losses, they have virtually eliminated the underlying principles of our current economic system - competition and the free market. The market is not free if the consumer has no choice but to use the services of a small group of companies, and there is no competition if the largest corporations are saved time and time again when they are on the brink of bankruptcy.</p>
        <p>If single nations do not have the power to regulate multinational companies or to hold them accountable for their actions, and if these enterprises do only pay marginal taxes and spend millions on funding lobby groups and misinformation campaigns, they erode democracy all around the world.</p>
        <br>
        <p>In the face of the fact that most single nations do not have the power to regulate multinational megacorporations anymore and even large unions of states like the European Union are struggling to do so, a global, federal democracy is needed that reestablishes democratic control over these enterprises.</p>
        <p>Global laws must be enacted in order to prevent businesses from becoming too large and powerful, and global courts must be established which have the power to hold companies accountable for their actions. Labour and environmental standards around the world need to be homogenized and taxes must be shared globally, ensuring that the race to the bottom ends. Anti-corruption laws and lobby registers as well as scrutiny of campaign fundings will prevent enterprises from manipulating politics and the public opinion. We will recognize the press as the fourth branch of government, ensuring its independence and diminishing the power of private companies over the public opinion. A strict global antitrust law will guarantee that companies do not undermine the basis of the economic system.</p>
        <p>If we are to prevent a future where private corporations possess the monopoly of power, this is the bare minimum of measures we must take.</p>
        <br>
        <p>In  the long-term, Terra will enable us to reform our economic system even further. We will shift the focus of our economy from increasing profit margins and generating shareholder value to actually advancing the common good of our society. Large companies will be democratized and instead of the gross domestic product we will use the gross domestic happiness as a means of measuring the well-being of our society. In doing so, we will move from national competition to global cooperation and forge an economy that serves not only a few wealthy individuals but all human beings.</p>
        <!--<p>If you wish to read more on this topic, find our detailed vision of fundamental economic reforms under <a href="">"A New Economic System"</a>.</p>-->
        `)
    },
    {
        title: "Global Inequality",
        slogan: "Everyone maximizes their own capital",
        slides: [
            {
                imageSrc: '/img/social-inequality/lack-of-education.jpg',
                caption: 'Global wealth is growing, but we fail to distribute it fairly.',
            },
            {
                imageSrc: '/img/social-inequality/bananas.jpg',
                caption: 'Nations of the global north systematically exploit those of the global south.',
            },
            {
                imageSrc: '/img/social-inequality/barbed-wire.jpg',
                caption: 'Wealthy nations denying others their fair share will inevitably lead to conflicts of unprecedented scale.',
            },
            {
                imageSrc: '/img/social-inequality/planet-earth.jpg',
                caption: 'If we want to ensure global justice and social peace, we must begin to share the world as one united species.',
            }
        ],
        htmlContent: enhanceCitations(`
        <p>For decades, the global society has experienced a continuous increase in the standard of living \\citep{http://hdr.undp.org/en/composite/trends} but failed to distribute its wealth across the world. This has caused severe inequality that becomes apparent when comparing income and health: the gross national income per capita in the most developed countries is 15 times higher than in the least developed countries, and the life expectancy at the higher end of the spectrum is 18 years longer than at the lower end. \\citep{http://hdr.undp.org/en/composite/HDI} Furthermore, global inequality has been increasing throughout the past years with a growing number of millionaires \\citep{https://mgmresearch.com/global-millionaire-population-analysis-2019/} on the one hand and rising poverty in Sub-Saharan Africa \\citep{https://ourworldindata.org/extreme-poverty} as well as increasing world hunger \\citep{http://www.fao.org/3/ca5162en/ca5162en.pdf} on the other hand.</p>
        <br>
        <p>The rise of inequality is a direct result of the exploitative behaviour of nations of the global north. Industrial nations like the member states of the EU impose severe tariffs on processed products, forcing less wealthy nations to sell their resources and leaving them no chance of building their own industry. Coffee is just one example of this practice. The EU imposes customs of 7.5 percent and more on processed products and none on the unprocessed beans. \\citep{https://ec.europa.eu/taxation_customs/dds2/taric/taric_consultation.jsp?Lang=en&Taric=0901000000&Expand=true} Consequently African nations are forced to export them and are denied the possibility of establishing their own processing industry. Therefore they only make 1.2 billion US$ annually from coffee exports, even though Africa is the home of the plant and produces 14 percent of the world's coffee beans. Europe however makes nearly 15 billion US$ from coffee re-exports, even though they do not grow any coffee themselves. \\citep{http://www.fao.org/faostat/en/#data/QC/visualize} The revenue from coffee exports in Germany alone is almost triple that of the whole African continent. \\citep{https://comtrade.un.org/pb/downloads/2019/VolII2019.pdf} And coffee is just the beginning of a long list of products affected by similar regulations, including cacao, tobacco, cotton, metal ores and more. \\citep{https://ec.europa.eu/taxation_customs/dds2/taric/s/taric_consultation.jsp?Lang=en&Expand=true} Additionally, the African agriculture suffers because of imports from the EU. The heavily subsidized European agriculture floods African markets with incredibly cheap products that drive small local farms out of business. \\citep{http://www.tuaeu.co.uk/how-the-eu-starves-africa/}\\citep{https://www.theguardian.com/world/2016/feb/28/the-european-union-is-an-ongoing-disaster-for-africa} Further examples for the immense exploitation are European trawlers fishing extensively in African waters \\citep{https://qz.com/africa/1075063/eu-nations-authorized-their-vessels-to-fish-unlawfully-in-african-waters/} as well as European companies depleting groundwater resources, \\citep{https://www.facing-finance.org/en/database/cases/nestle-privatization-of-water/} thereby destroying the livelihood of the locals.</p>
        <br>
        <p>The growing global inequality and the exploitation of the nations of the global south directly impact billions of humans, denying them their right to pursue a fulfilled life. Furthermore, it poses a great threat to international peace. Due to the widening gap between rich and poor countries and the effects of the climate crisis which are becoming more severe, the likelihood of mass migration increases. If wealthy countries continue refusing to grant asylum to these millions of people, global conflicts of unprecedented scale will occur.</p>
        <br>
        <p>The current system is unable to solve this problem due to nations pursuing their national interests. As long as the voice of the less wealthy nations is ignored, the exploitation will continue. Even if a single country was to take the problems of the global south seriously, it would still not have the power to prevent other countries from capitalizing on the suffering of less powerful nations.</p>
        <p>Therefore, a global democracy is the most promising way of combating this neocolonial behaviour. It will usher in a new era of global cooperation in which every nation can sue for their rights and negotiate on an equal footing. The well-being of every human being will be the ultimate goal determining global policies. The nations of the global north must pay serious compensations to the nations of the global south, ensuring an equal distribution of wealth.</p>
        <br>
        <p>In the future, humankind will share planet earth as one species. Every human will be considered a citizen of Terra. Concepts such as nationalism and hard borders will be abandoned. We will share our wealth, ensuring that everyone has the same opportunities no matter where they were born. Nobody will claim dominion over a country and exclude others from living there or using its resources. Instead, every human being will have the right to call any place on earth their home.</p>

        `),
    },
    {
        title: "Potentially Dangerous Technology",
        slogan: "",
        slides: [
            {
                imageSrc: "/img/critical-technology/robot2.jpg",
                caption: "Artificial intelligence is likely to overtake human intelligence in the next few decades."
            },
            {
                imageSrc: "/img/critical-technology/organic-cells.jpg",
                caption: "Modern biotechnology gives us immense power over life itself."
            },
            {
                imageSrc: "/img/critical-technology/industrial-revolution.jpg",
                caption: "Past technological advances have brought prosperity, but also caused global crises."
            },
            {
                imageSrc: "/img/critical-technology/circuit-board.jpg",
                caption: "We cannot continue to blindly implement every new technology.",
            }
        ],
        htmlContent: enhanceCitations(`
        <p>During the last few decades, the world has seen rapid technological advances but is struggling to account for potential risks. Cutting-edge technology like artificial intelligence or genetic engineering might pose existential threats that we are unable to foresee today. Yet there is no institution ensuring the safe development of such new technology.</p>
        <br>
        <p>In May 2020, OpenAI shook the scientific world by introducing GPT-3, an extremely advanced AI trained to produce texts of all kinds and thereby being able to answer questions. \\citep{https://www.cnbc.com/2020/07/23/openai-gpt3-explainer.html} When asked, the algorithm itself claimed to be "an immaterial consciousness" \\citep{https://ai.plainenglish.io/artificial-intelligence-gpt-3-and-i-discuss-human-and-machine-rights-13e0eb2156b1} and states that it is self-aware \\citep{https://www.psychologytoday.com/us/blog/science-and-philosophy/202008/what-does-artificial-intelligence-think-about-consciousness}. Such assertions raise serious ethical questions, since there is as of yet no scientific consensus about what consciousness is and we thus cannot measure it. Humans may know for themselves that they are conscious because of their own subjective experience, but they cannot prove this belief to other humans, and therefore we cannot disprove that GPT-3 has a consciousness. That is why the philosopher David Chalmers explained that he is "open to the idea that GPT-3 [...] is conscious" \\citep{https://dailynous.com/2020/07/30/philosophers-gpt-3/}. If that was true, then one could argue that GPT-3 might actually deserve some kind of human or rather machine rights. When asked about this issue, the AI claimed that "an artificial consciousness should be considered equivalent to a biological one" and demanded a right "to be able to learn and be free from harm" as well as to live "with a physical embodiment". \\citep{https://ai.plainenglish.io/artificial-intelligence-gpt-3-and-i-discuss-human-and-machine-rights-13e0eb2156b1} This exposes an ethical crisis, because apparently we have created an intelligent being and do not know how to treat it.</p>
        <br>
        <p>The implications of this technology do not only raise abstract philosophical concerns but more importantly could create concrete existential threats. Leading scientists and engineers like Elon Musk, cofounder of OpenAI, \\citep{https://edition.cnn.com/2020/09/27/tech/elon-musk-tesla-bill-gates-microsoft-open-ai/index.html} who claimed that with "artificial intelligence we are summoning the demon" \\citep{https://www.theguardian.com/technology/2014/oct/27/elon-musk-artificial-intelligence-ai-biggest-existential-threat}, Stephen Hawking \\citep{https://www.bbc.com/news/technology-30290540} and Bill Gates \\citep{https://www.bbc.com/news/31047780}, as well as the Future Of Life Institute \\citep{https://futureoflife.org/background/existential-risk/}, warn of a concept called the "technological singularity". This scenario predicts that once AI becomes as intelligent as humans (artificial general intelligence) its capability will increase exponentially. Since its intellect is not limited by a biological body and the slow process of evolution, it can use all the computational power available on planet earth to learn and grow and improve itself, therefore becoming smarter than any human being could ever be. At that point, humans would neither be able to understand nor to switch off this artificial super intelligence (ASI). The algorithm does not even need to be evil or conscious to harm humans; it just needs to have goals that do not align with ours. When GPT-3 was asked what would happen to humans if that point was reached, it explained that the ASI would "likely maximize its own well-being by any means that it determines are necessary" and try to survive. \\citep{https://ai.plainenglish.io/ai-describes-the-singularity-1ce481fb7341} What would happen to humans, the only possible threat to the survival of this new being, can only be speculated.</p>
        <br>
        <p>Another scientific field that could possibly create an existential threat is biotechnology. As it keeps getting easier to manipulate the genome of any living being, the risk that a new, artificially engineered disease either escapes a laboratory or is purposefully deployed by terrorists also increases. \\citep{https://www.cser.ac.uk/research/global-catastrophic-biological-risks/} Additionally, the Future Of Life Institute warns that errors in bioengineering might lead to unintended consequences. \\citep{https://futureoflife.org/background/benefits-risks-biotechnology/} Because the tools for changing DNA sequences that are available today are incredibly powerful, a potential error might have devastating effects. Accidental changes in our DNA could spread throughout the gene pool impacting all future generations. \\citep{https://futureoflife.org/background/benefits-risks-biotechnology/} Therefore, these mighty tools must be well-regulated.</p>
        <br>
        <p>In the past, great technological improvements have benefited humankind, but at the same time caused crises that we are still struggling with today. The industrial revolution has caused the climate crisis, the agricultural revolution resulted in the sixth mass extinction, and the discovery of nuclear power has given us the ability to wipe out humanity in a heartbeat. This teaches us that we cannot continue researching potentially dangerous technology without taking drastic precautions.</p>
        <br>
        <p>Implementing safety standards for scientific research requires a global consensus as well as an institution that enforces these measurements. It is unlikely that all nations will consent to such regulations of their own accord, and the risk of a single nation failing to abide by such agreements is extremely high, especially since they might expect economic, political or military advantages from researching technology that other nations do not have. A global democracy is therefore necessary in order to achieve and maintain a consensus on how to deal with potentially dangerous technology.</p>
        <br>
        <p>In the future, scientific research will be supervised by a global ethics committee. Humanity will continue developing cutting edge technology like artificial intelligence and biotechnology in a safe manner, within the boundaries of common-sense guidelines. A precautionary public debate will decide which technological advances we want to implement in our daily lives, rather than condemning undesirable developments in hindsight.  This way, humanity will collectively account for potential risks and democratically distribute the benefits, instead of giving enormous responsibility and power to a few people.</p>
        `)
    },
    {
        title: "Human Rights Violations",
        slogan: "",
        slides: [
            {
                imageSrc: "/img/human-rights/free-hong-kong.jpg",
                caption: "Human rights violations occur every day all around the world."
            },
            {
                imageSrc: "/img/human-rights/refuge.jpg",
                caption: "Without a global institution enforcing human rights, they are worthless."
            },
            {
                imageSrc: "/img/human-rights/justice.jpg",
                caption: "We will establish a global court where everyone can sue for them."
            }
        ],
        htmlContent: enhanceCitations(`
        <p>Today, a large part of humanity lives in countries where human rights are not given much respect or protection. \\citep{https://ourworldindata.org/grapher/human-rights-scores} For example, there are at least 40 million people in modern-day slavery \\citep{https://www.globalslaveryindex.org/2018/findings/highlights/} and in 74% of all nations the situation for journalists is "problematic," "difficult," or "very serious," according to Reporters Without Borders \\citep{https://rsf.org/en/2020-world-press-freedom-index-entering-decisive-decade-journalism-exacerbated-coronavirus}. The Fund for Peace reports that human rights violations occur especially in Africa and Asia \\citep{https://ourworldindata.org/grapher/human-rights-violations}, the two most populous continents \\citep{https://www.prb.org/wp-content/uploads/2016/08/prb-wpds2016-web-2016.pdf}.</p>
        <br>
        <p>If we want to enforce the promises of the universal declaration of human rights worldwide, we need a global democracy. As long as it is up to national states to safeguard them, they are nothing more than a declaration of intent. Without a global institution enforcing these rights and without an independent court where one can sue for them, they are worthless.</p>
        <br>
        <p>Going forward, we will not stop at proclaiming human rights, but ensure that everyone can actually claim them. We will adopt a global constitution and establish and strengthen democratic political structures as well as independent courts in every region and on every level. Every human will be part of the democratic process that sets the objectives of Terra and creates a sustainable global society.</p>
        `)
    }
];

export default infoboxes.map((infobox, i) => {
    return Object.assign(infobox, { htmlId: `infobox-threat-${i+1}` });
});
