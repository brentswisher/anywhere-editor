import PublicationEditor from './PublicationEditor';
import CustomControl from './CustomControl';

function App() {
	const testData = [
			{
				id: '11111',
				type: 'article-content',
				position: 'position-full',
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
				position: 'position-full',
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
				position: 'position-full',
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
				position: 'position-full',
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
				position: 'position-full',
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
				position: 'position-full',
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
				position: 'position-full',
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
				position: 'position-full',
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
				position: 'position-full',
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
		],
		config = {
			cssClasses: {
				'block-list': '',
				'block-actions': 'hidden',
				'block-actions-active': 'flex',
				'control-container': '',
				'control-container-active': '',

				'error-container':
					'bg-red-100 border border-red-400 text-red-700 px-4 py-3 my-4 rounded relative',

				'content-buttons': 'w-7/12 mx-auto mt-6 sm:px-2',
				'button-primary':
					'inline-block font-medium text-sm px-5 py-2.5 text-center mr-2 focus:ring-4 text-white bg-sky-700 hover:bg-sky-900 focus:ring-sky-300',
				'button-secondary':
					'inline-block font-medium text-sm px-5 py-2.5 text-center mr-2 focus:ring-4 text-white bg-slate-600 hover:bg-slate-800 focus:ring-slate-300',
				'button-success':
					'inline-block font-medium text-sm px-5 py-2.5 text-center mr-2 focus:ring-4 text-gray-900 bg-green-400 hover:bg-green-500 focus:ring-green-100',
				'button-alert':
					'inline-block font-medium text-sm px-5 py-2.5 text-center mr-2 focus:ring-4 text-white bg-red-700 hover:bg-red-800 focus:ring-red-300',

				'button-group': 'flex items-center justify-left py-4',
				'button-group-primary':
					'inline-block font-medium text-sm px-5 py-2.5 text-center focus:ring-4 text-white bg-sky-700 hover:bg-sky-900 focus:ring-sky-300',
				'button-group-secondary':
					'inline-block font-medium text-sm px-5 py-2.5 text-center focus:ring-4 text-white bg-slate-600 hover:bg-slate-800 focus:ring-slate-300',
				'button-group-success':
					'inline-block font-medium text-sm px-5 py-2.5 text-center focus:ring-4 text-gray-900 bg-green-400 hover:bg-green-500 focus:ring-green-100',
				'button-group-alert':
					'inline-block font-medium text-sm px-5 py-2.5 text-center focus:ring-4 text-white bg-red-700 hover:bg-red-800 focus:ring-red-300',

				'dropdown-list': 'hidden',
				'dropdown-list-open':
					'absolute z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow',
				'dropdown-button':
					'block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100',
				'dropdown-button-active':
					'block py-2 px-4 text-sm text-gray-100 bg-gray-700 hover:text-gray-700 hover:bg-gray-100',

				'position-full': 'w-7/12 mx-auto sm:px-2',
				'position-left': 'position-left',
				'position-right': 'position-right',
				'position-full-page': 'position-full-page',
				'position-offset-full': 'position-offset-full',
				'position-offset-left': 'position-offset-left',
				'position-offset-right': 'position-offset-right',

				'text-left': 'text-left',
				'text-right': 'text-right',
				'text-center': 'text-center',

				'border-top': 'border-t-2',
				'border-bottom': 'border-b-2',
				'border-both': 'border-y-2',

				// //Todo: these will be generated by the colors config
				// 'color-*': 'color-*',

				'heading-1': 'font-bold text-6xl text-center',
				'heading-2': 'font-semibold text-4xl text-center',
				'heading-3': '',
				'heading-4': '',

				// 'no-drop-cap': 'stop-drop-cap',

				modal:
					'relative mx-auto w-2/3 p-8 mt-16 rounded border-2 border-slate-200 bg-white max-h-screen',
				'modal-overlay': 'fixed inset-0 bg-black/75',

				'sr-only': 'sr-only',
				active: 'is-active bg-zinc-100',
				// visible: 'visible',

				// 'tab-group': 'tabs',
				// 'tab-content': 'tabs-content',
				// 'tab-panel': 'tabs-panel',
				// 'tab-title': 'tabs-title',

				// gallery: 'gallery',
				// 'gallery-items': 'gallery-items',
				// 'gallery-item': 'gallery-item',
				// 'gallery-caption': 'gallery-caption',

				// photo: 'photo',
				// 'photo-caption': 'photo-caption',
				// 'photo-mobile-full': 'photo-mobile-full',
				// 'photo-mobile-match': 'photo-mobile-match',

				// 'pull-quote': 'pull-quote',
				// 'pull-quote-spacing-large': 'pull-quote-spacing-large',
				// 'pull-quote-icon': 'pull-quote-icon',
				// 'pull-quote-author': 'pull-quote-author',

				// 'video-container': 'responsive-embed widescreen',

				// //Input styles
				// 'color-picker': 'color-picker',
				// 'color-picker-sample': 'color-picker-sample',
				'help-text': 'help-text',
				input:
					'block box-border w-full h-10 mb-4 p-2 border-2 border-neutral-300 shadow-sm transition-shadow text-base text-black',
				'input-text': '',
				'input-select': '',
				label: 'block text-sm text-base',
			},
		};

	return (
		<div>
			<PublicationEditor
				content={ testData }
				template={ testData }
				controls={ [ 'Heading', 'Content', 'Image', 'Video' ] }
				config={ config }
				customControls={ {
					Testing: {
						control: CustomControl,
						displayName: 'Testing',
						isMainItem: true,
					},
				} }
			/>
		</div>
	);
}

export default App;
