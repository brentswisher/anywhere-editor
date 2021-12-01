import PublicationEditor from './PublicationEditor';

function App() {
	// const testData = [
	// 	{
	// 		id: '11111',
	// 		type: 'article-content',
	// 		innerContent: [
	// 			{
	// 				id: '3766',
	// 				type: 'Heading',
	// 				data: { text: 'Apple', level: 1 },
	// 			}, //Block level data, array to eventually allow rows
	// 		],
	// 	},
	// 	{
	// 		id: '22222',
	// 		type: 'article-content',
	// 		innerContent: [
	// 			{
	// 				id: '4891',
	// 				type: 'Heading',
	// 				data: { text: 'Kiwi', level: 1 },
	// 			},
	// 			{
	// 				id: '48931',
	// 				type: 'Heading',
	// 				data: { text: 'Kiwi Berry', level: 1 },
	// 			},
	// 		],
	// 	},
	// 	{
	// 		id: '33333',
	// 		type: 'article-content',
	// 		innerContent: [
	// 			{
	// 				id: '5638',
	// 				type: 'Heading',
	// 				data: { text: 'Banana', level: 1 },
	// 			},
	// 		],
	// 	},
	// 	{
	// 		id: '44444',
	// 		type: 'article-content',
	// 		innerContent: [
	// 			{
	// 				id: '433',
	// 				type: 'Heading',
	// 				data: { text: 'Grape', level: 1 },
	// 			},
	// 		],
	// 	},
	// ];
	const testData = [
		{
			id: '11111',
			type: 'article-content',
			innerContent: [
				{
					data: {
						text: 'Alumni Award Winners',
						level: 1,
					},
					id: 8,
					type: 'Heading',
				},
			],
		},
		{
			id: '109811',
			type: 'article-content',
			innerContent: [
				{
					data: {
						articleId: 'C63E796E-C5FA-E3C3-0D7C67D38EC20D9B',
						position: 'full',
						captionPosition: 'right',
						border: '',
						src: '9BF1DCF1-93A1-EA36-A1F1605255B1E5EE',
						thumbnailPath:
							'https://www.gvsu.edu/gvmagazine/files/img/article/C63E796E-C5FA-E3C3-0D7C67D38EC20D9B/',
						fieldName: 'field_0',
						alt:
							'The Distinguished Alumni Award: headshot of Nicholas Ceglarek',
						editing: false,
						mobilePosition: 'full',
						hasUpload: false,
						caption: '',
					},
					id: 8,
					type: 'Image',
				},
			],
		},
		{
			id: '12344',
			type: 'article-content',
			innerContent: [
				{
					data: {
						articleId: 'C63E796E-C5FA-E3C3-0D7C67D38EC20D9B',
						hasDropCap: false,
						fieldName: 'field_1',
						title: "Nicholas Ceglarek '96 & '99",
						editing: false,
						content:
							'<p><strong>Nicholas Ceglarek has served as superintendent of the Traverse Bay Area Intermediate School District since 2018. Ceglarek earned bachelor’s and master’s degrees in education in 1996 and 1999.</strong><em> </em>While at Grand Valley, he was Academic All-Conference quarterback, GVSU Scholar Athlete of the Year and a Rhodes Scholar candidate.</p><p>Ceglarek is committed to giving back to his community. For the past 20 years, he has served as an adjunct professor at GVSU, teaching educational leadership and special education courses. He helped develop a regional cohort for West Michigan leaders who enrolled in the GVSU educational specialist degree program. Ceglarek is a founding board member of Hand2Hand, a nonprofit program that provides food to children facing weekend hunger. Hand2Hand serves more than 8,000 students ages 3-18 in 230 schools in West Michigan.&nbsp;</p>',
						hasUpload: 'false',
					},
					id: 6,
					type: 'Content',
				},
			],
		},
		{
			id: '523465',
			type: 'article-content',
			innerContent: [
				{
					data: {
						articleId: 'C63E796E-C5FA-E3C3-0D7C67D38EC20D9B',
						src: '9BF1DD3B-C008-D057-0D567241F728C7B9',
						thumbnailPath:
							'https://www.gvsu.edu/gvmagazine/files/img/article/C63E796E-C5FA-E3C3-0D7C67D38EC20D9B/',
						fieldName: 'field_2',
						alt:
							'The Alumni Service Award: Headshot of Rachel Cardosa',
						editing: false,
						hasUpload: false,
					},
					id: 9,
					type: 'Image',
				},
			],
		},
		{
			id: '234543645',
			type: 'article-content',
			innerContent: [
				{
					data: {
						articleId: 'C63E796E-C5FA-E3C3-0D7C67D38EC20D9B',
						hasDropCap: false,
						fieldName: 'field_3',
						title: "Mackenzie Satkoski '06 & '07",
						editing: false,
						content:
							'<p><strong>Mackenzie Satkoski graduated in 2006 and 2007 with a bachelor’s degree in business administration and a master’s degree in accounting.</strong> During her time at Grand Valley, she earned academic and athletic All-American honors, serving as a captain of the women’s swimming team.&nbsp;</p><p>After graduation, she worked as a CPA for nearly 13 years before joining the Hudsonville Ice Cream Company team in 2019. Satkoski is devoted to helping fellow alumni by serving as president of the GVSU Swimming &amp; Diving Alumni Chapter and as co-organizer and treasurer of the</p><p>Annual Coach Jim Meerman Memorial Golf Outing. One person commented on Satkoski’s impact on GVSU: “Mackenzie is a fantastic ambassador and role model for GVSU. She is extremely organized and thorough in all that she does.”</p>',
						hasUpload: 'false',
					},
					id: 4,
					type: 'Content',
				},
			],
		},
		{
			id: '23453465',
			type: 'article-content',
			innerContent: [
				{
					data: {
						articleId: 'C63E796E-C5FA-E3C3-0D7C67D38EC20D9B',
						src: '9C58D794-DCF4-C36C-69C9E5EB0FDB7BBB',
						thumbnailPath:
							'https://www.gvsu.edu/gvmagazine/files/img/article/C63E796E-C5FA-E3C3-0D7C67D38EC20D9B/',
						fieldName: 'field_4',
						alt:
							'The Young Alumni Award: Headshot of Mackenzie Satkoski ',
						editing: false,
						hasUpload: false,
					},
					id: 10,
					type: 'Image',
				},
			],
		},
		{
			id: '23464354',
			type: 'article-content',
			innerContent: [
				{
					data: {
						articleId: 'C63E796E-C5FA-E3C3-0D7C67D38EC20D9B',
						hasDropCap: false,
						fieldName: 'field_5',
						title: "Rachel Cardosa '16",
						editing: false,
						content:
							'<p><strong>Rachel Cardosa is a certified nurse practitioner for Spectrum Health Hospice &amp; Palliative Care in Grand Rapids.</strong><em> </em>She earned a doctorate in nursing practice from Grand Valley in 2016. She is repeatedly recognized by her peers and patients as one of the most caring nurses they know.&nbsp;</p><p>Cardosa helped expand Spectrum Health’s palliative care services and guided patients and their families through the end-of-life trajectory. She implemented financial sustainability into the program to ensure future care is available to the community. Cardosa also assists the Kirkhof College of Nursing by training DNP students each semester as a nurse practitioner preceptor. She is a member of the Hospice and Palliative Care Nurse Association, the Michigan Council of Nurse Practitioners, and treasurer of the West Michigan Hospice and Palliative Care Nurse Association.&nbsp;</p>',
						hasUpload: 'false',
					},
					id: 5,
					type: 'Content',
				},
			],
		},
		{
			id: '23452345',
			type: 'article-content',
			innerContent: [
				{
					data: {
						articleId: 'C63E796E-C5FA-E3C3-0D7C67D38EC20D9B',
						src: '9C58D7E0-FB04-4CDC-3CE43F09A2F04CE2',
						thumbnailPath:
							'https://www.gvsu.edu/gvmagazine/files/img/article/C63E796E-C5FA-E3C3-0D7C67D38EC20D9B/',
						fieldName: 'field_6',
						alt:
							'The Outstanding Educator Award: Headshot of Scott Stabler',
						editing: false,
						hasUpload: false,
					},
					id: 11,
					type: 'Image',
				},
			],
		},
		{
			id: '32452345',
			type: 'article-content',
			innerContent: [
				{
					data: {
						articleId: 'C63E796E-C5FA-E3C3-0D7C67D38EC20D9B',
						fieldName: 'field_7',
						title: 'Scott Stabler',
						editing: false,
						content:
							'<p><strong>Scott Stabler, professor of history, is known for not only helping his students launch their careers, but for also staying in touch many years later.</strong><em> </em>Stabler has devoted himself to teaching a wide variety of students and subjects at Grand Valley and loves to help young teachers find job placements.&nbsp;</p><p>He is active in Grand Valley’s Faculty Mentorship Program, which pairs student athletes with a faculty member within their major course of study; and the Oliver Wilson Scholars program, in which he ensures students receive access to resources such as tutoring and specialized courses. Many students will not forget his kindness. One alumnus said: “Professor Stabler is one of those rare instructors you never forget. His passion, teaching excellence, pedagogy and overall concern for the well-being of his students, both current and past, leaves an indelible mark on alumni.”&nbsp;</p>',
						hasUpload: 'false',
					},
					id: 7,
					type: 'Content',
				},
			],
		},
	];

	return (
		<div>
			<PublicationEditor content={ testData } template={ testData } />
		</div>
	);
}

export default App;
