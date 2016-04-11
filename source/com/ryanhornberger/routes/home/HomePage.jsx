'use strict'

import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Spring2016Template from 'com/ryanhornberger/templates/Spring2016';

class HomePage extends React.Component 
{

	render()
	{
		return (
			<Spring2016Template>
				
				<Helmet title="Ryan Hornberger - Innovator" />
				
				<article>
					<h1>+2 Rwanda towns with clean water</h1>
					<div>Thanks to your help, 2 new functioning Water Taps are working in Rwanda</div>

					<p>
						It took a while, but it's finally done! On August 19th, 2014 we concluded Josh's 
						birthday Charity:Water campaign. At that time I promised that we'd update the blog
						each time we heard news about the progress of our water projects and I failed you.
					</p>

					<p>
						Shortly after that blog post we ended up making an unexpected move to Los Angeles and
						the chaos of our lives since put Josh's Charity:Water campaign far in the back of our
						concience. While our family has been receiving updates, we have not taken the time to 
						share them here. For that, I apologize.
					</p>

					<p>
						Now, 18 months later, we received our final report. The projects are complete! The money
						we raised contributed to a collection of funds that ultimately helped bring water to
						several communities in Rwanda!
					</p>

					<p>
						According to the reports we received, our funds went to the Rulindo district of Rwanda 
						where only 56% of the population had access to clean, safe drinking water. The mountains
						in the area posed various challenges to the task at hand and thus Charity:Water with their
						partners in the area concluded the best solution for the area would be a large-scale pipe
						system pressurized by massive pumping stations.
					</p>

					<p>
						The pump and pipe system that was built created a network of water that reached villages,
						clinics, and schools. The funds we provided were ultimately allocated 100% to two specific 
						water taps in the 

							<a href="https://mycw.charitywater.org/p/myprojectsview?project_id=RW.WFP.Q3.14.166.071&campaign_id=53805">
								&nbsp;Nyanga Community (354 people)
							</a> 

							&nbsp;and the 
							
							<a href="https://mycw.charitywater.org/p/myprojectsview?project_id=RW.WFP.Q3.14.166.025&campaign_id=53805">
								&nbsp;Kabunigu Rusiga Sector Community (250 people)
							</a>

							&nbsp;!
					</p>

					<p>
						To encourage a local sense of ownership by each community, local members contributed their
						own funds, time, and talents to the building of the project. They were given training on
						sanitation and safe use. They will be asked to continue making small contributions to the
						maintenance fund to keep their source operational. 
					</p>

					<p>
						We're so grateful to have had the opportunity to contribute a small piece to this much larger
						solution. We're grateful to everyone who donated, for helping us realize Josh's Birthday wish.
						We're grateful to Charity:Water and their partners for working so hard to make us feel certain
						that the work they are doing is reliable and making a difference. And we're grateful to the
						private donors that fund Charity:Water's operations so that 100% of our donation can go straight
						to the field where we intended it to go.
					</p>

					<p>
						Thanks!
					</p>
				</article>

			</Spring2016Template>
		);
	}
		
}

module.exports = HomePage;
