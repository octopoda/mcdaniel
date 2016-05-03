<?php 

	use Illuminate\Database\Seeder; 

	class appearancesTableSeeder extends Seeder { 
		/** 
		* Run the database seeds. 
		* 
		* @return void 
		*/ 
		public function run() { 
			DB::table("appearances")->delete(); 

			$item = [ 
				[ 
						"link" => "http:\/\/www.youtube.com\/watch?feature=player_embedded&v=OpSVt5RCg0A", 
						"video_url" => "OpSVt5RCg0A", 
						"title" => "Tim Ezell Show", 
						"published" => "1", 
						"created_at" => "0000-00-00 00:00:00", 
						"direct_link" => "tim-ezell-show", 
						"publication" => "Fox 2", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/www.ivillage.com\/don-t-set-yourself-fail\/4-b-121626#list-view", 
						"video_url" => "", 
						"title" => "Don't Set yourself up to fail", 
						"published" => "1", 
						"created_at" => "2012-01-01 16:42:00", 
						"direct_link" => "", 
						"publication" => "iVillage", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/www.menshealth.com\/mhlists\/weight-loss-mistakes\/index.php", 
						"video_url" => "", 
						"title" => "6 Mistakes That Keep You Fat", 
						"published" => "1", 
						"created_at" => "2011-10-21 16:42:00", 
						"direct_link" => "", 
						"publication" => "Men's Health", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/www.newswise.com\/articles\/slu-dietitian-names-top-five-holiday-foods", 
						"video_url" => "", 
						"title" => "Dietitian Names Top Five Holiday Foods", 
						"published" => "1", 
						"created_at" => "2010-12-21 16:45:00", 
						"direct_link" => "", 
						"publication" => "Newswise", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/www.stltoday.com\/lifestyles\/health-med-fit\/article_dd23f61a-372d-571c-b38d-23331ae47ece.html", 
						"video_url" => "", 
						"title" => "'Freshman 15' may be more myth than fact", 
						"published" => "1", 
						"created_at" => "2009-09-21 16:46:00", 
						"direct_link" => "", 
						"publication" => "STLToday.com", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/www.stlmag.com\/St-Louis-Magazine\/June-2009\/Food-for-Thought\/", 
						"video_url" => "", 
						"title" => "Food for Thought", 
						"published" => "0", 
						"created_at" => "2009-12-21 16:47:00", 
						"direct_link" => "food-for-thought", 
						"publication" => "STLMag.com", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/www.stlmag.com\/St-Louis-Magazine\/April-2010\/Dieting-by-Disposition\/", 
						"video_url" => "", 
						"title" => "Dieting by Disposition", 
						"published" => "1", 
						"created_at" => "2010-12-21 17:01:00", 
						"direct_link" => "dieting-by-disposition", 
						"publication" => "STLMag.com", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/fox2now.com\/2012\/12\/04\/jen-mcdaniels-eat-or-drink-your-calories\/#ooid=FteWRlNzrWHPxnYIdHBJL0-3pIMoAeLq", 
						"video_url" => "<script src=\"http:\/\/player.ooyala.com\/player.js?height=360&embedCode=FteWRlNzrWHPxnYIdHBJL0-3pIMoAeLq&deepLinkEmbedCode=FteWRlNzrWHPxnYIdHBJL0-3pIMoAeLq&video_pcode=d2b3E6s5rDofer9uw9hhgMxCRs6U&width=640\"><\/script>", 
						"title" => "Build a Better Smoothie", 
						"published" => "1", 
						"created_at" => "2012-12-04 12:38:00", 
						"direct_link" => "build-a-better-smoothie", 
						"publication" => "Fox 2 News", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/stlmoms.com\/2012\/12\/17\/jen-mcdaniel-holiday-superfoods\/#ooid=lrdXZvNzrrNj5I87F-gMOibEaa_V6Oxi", 
						"video_url" => "<script src=\"http:\/\/player.ooyala.com\/player.js?height=365&embedCode=lrdXZvNzrrNj5I87F-gMOibEaa_V6Oxi&deepLinkEmbedCode=lrdXZvNzrrNj5I87F-gMOibEaa_V6Oxi&video_pcode=d2b3E6s5rDofer9uw9hhgMxCRs6U&width=650\"><\/script>", 
						"title" => "Holiday Superfoods", 
						"published" => "1", 
						"created_at" => "2012-12-27 12:42:00", 
						"direct_link" => "holiday-superfoods", 
						"publication" => "Fox 2 STL Moms - Holiday Superfoods", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/www.self.com\/health\/2013\/01\/what-to-eat-for-all-day-energy", 
						"video_url" => "", 
						"title" => "What To Eat For All Day Energy", 
						"published" => "1", 
						"created_at" => "2013-01-04 15:02:00", 
						"direct_link" => "what-to-eat-for-all-day-energy", 
						"publication" => "Self Magazine- What to Eat for All Day Energy", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/www.mensjournal.com\/health-fitness\/nutrition\/the-surprising-salad-solution-20120629", 
						"video_url" => "", 
						"title" => "The Surprising Salad Solution", 
						"published" => "1", 
						"created_at" => "2012-10-04 15:05:00", 
						"direct_link" => "the-surprising-salad-solution", 
						"publication" => "Men's Journal", 
						"user_id" => "2", 
				],
				[ 
						"link" => "https:\/\/client.myoptumhealth.com\/myoptumhealth\/guest\/page.esync?view=prelogin.learn.learnLanding&command=article&articleCategory=&path=&article=c39d11569b8f9310VgnVCM2000002a4ab10a____", 
						"video_url" => "", 
						"title" => "The Humble Potato", 
						"published" => "1", 
						"created_at" => "2012-11-04 15:07:00", 
						"direct_link" => "the-humble-potato", 
						"publication" => "My Optum Health", 
						"user_id" => "2", 
				],
				[ 
						"link" => "https:\/\/client.myoptumhealth.com\/myoptumhealth\/guest\/page.esync?view=prelogin.learn.learnLanding&command=article&articleCategory=Focus+on+Fruit%3A+Cranberries&path=Nutrition+%2B+Healthy+Eating---Nutrition+Overview---Power+Foods+%2B+Prevention&article=5443ba307c579110VgnVCM1000005220720a____", 
						"video_url" => "", 
						"title" => "Focus on Fruit: Cranberries", 
						"published" => "1", 
						"created_at" => "2012-12-04 15:08:00", 
						"direct_link" => "focus-on-fruit-cranberries", 
						"publication" => "My Optum Health", 
						"user_id" => "2", 
				],
				[ 
						"link" => "https:\/\/client.myoptumhealth.com\/myoptumhealth\/guest\/page.esync?view=prelogin.learn.learnLanding&command=article&articleCategory=Lighten+Up!&path=Nutrition+%2B+Healthy+Eating---Nutrition+Overview---Nutrition+Basics&article=20f83ce96b338310VgnVCM100000294ab10a____", 
						"video_url" => "", 
						"title" => "Lighten Up! Salad Dressings", 
						"published" => "1", 
						"created_at" => "2012-09-04 15:09:00", 
						"direct_link" => "lighten-up-salad-dressings", 
						"publication" => "My Optum Health", 
						"user_id" => "2", 
				],
				[ 
						"link" => "https:\/\/client.myoptumhealth.com\/myoptumhealth\/guest\/page.esync?view=prelogin.learn.learnLanding&command=article&articleCategory=Lighten+Up!&path=Nutrition+%2B+Healthy+Eating---Nutrition+Overview---Nutrition+Basics&article=20f83ce96b338310VgnVCM100000294ab10a____", 
						"video_url" => "", 
						"title" => "A+ Formula for Sports Nutrition Meals", 
						"published" => "1", 
						"created_at" => "2012-10-04 15:10:00", 
						"direct_link" => "a-formula-for-sports-nutrition-meals", 
						"publication" => "Moms Team", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/stlmoms.com\/2013\/01\/04\/jen-mcdaniel-how-to-avoid-wasting-food\/", 
						"video_url" => "<script src=\"http:\/\/player.ooyala.com\/player.js?height=365&embedCode=xtbWsyODo-TPkzwazoyDCAWi3uAlQR5i&deepLinkEmbedCode=xtbWsyODo-TPkzwazoyDCAWi3uAlQR5i&video_pcode=d2b3E6s5rDofer9uw9hhgMxCRs6U&width=650\"><\/script>", 
						"title" => "How to Avoid Food Waste", 
						"published" => "1", 
						"created_at" => "2013-01-04 15:17:00", 
						"direct_link" => "how-to-avoid-food-waste", 
						"publication" => "Fox 2 STL Moms - Avoiding Food Waste", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/www.health.com\/health\/gallery\/0,,20639075_1,00.html", 
						"video_url" => "", 
						"title" => "25 Surprising Ways to Lose Weight", 
						"published" => "1", 
						"created_at" => "2012-12-04 15:24:00", 
						"direct_link" => "25-surprising-ways-to-lose-weight", 
						"publication" => "Health Magazine", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/www.cbsnews.com\/8301-204_162-57542624\/stop-halloween-from-becoming-a-health-nightmare\/", 
						"video_url" => "", 
						"title" => "Stop Halloween From Becoming a Health Nightmare", 
						"published" => "1", 
						"created_at" => "2012-10-04 15:27:00", 
						"direct_link" => "stop-halloween-from-becoming-a-health-nightmare", 
						"publication" => "CBSNews.com", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/fox2now.com\/2013\/03\/19\/jen-mcdaniel-frozen-foods-has-nutritional-value\/", 
						"video_url" => "<script src=\"http:\/\/player.ooyala.com\/iframe.js#ec=cwdWlhYTrI84bD_nlM4T7zTEdok56ZTs&pbid=c660b791c3704ff69d4162d7adb7c4a1\"><\/script>", 
						"title" => "National Nutrition Month meets National Frozen Food Month!", 
						"published" => "1", 
						"created_at" => "2013-03-19 14:01:00", 
						"direct_link" => "national-nutrition-month-meets-national-frozen-food-month", 
						"publication" => "Fox 2 News - National Nutrition Month\/Frozen Food Month", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/www.prevention.com\/food\/healthy-eating-tips\/food-pairings-are-healthier-together", 
						"video_url" => "", 
						"title" => "Food Pairings are Healthier Together", 
						"published" => "1", 
						"created_at" => "2013-02-20 12:09:00", 
						"direct_link" => "food-pairings-are-healthier-together", 
						"publication" => "Prevention Magazine - Eat This With That", 
						"user_id" => "2", 
				],
				[ 
						"link" => "<script src=\"http:\/\/player.ooyala.com\/iframe.js#pbid=c660b791c3704ff69d4162d7adb7c4a1&ec=E1dm50YTrYdJgToy9GJ_LWLCjD8LtKiE\"><\/script>", 
						"video_url" => "<script src=\"http:\/\/player.ooyala.com\/iframe.js#pbid=c660b791c3704ff69d4162d7adb7c4a1&ec=E1dm50YTrYdJgToy9GJ_LWLCjD8LtKiE\"><\/script>", 
						"title" => "Spice It Up!", 
						"published" => "1", 
						"created_at" => "0000-00-00 00:00:00", 
						"direct_link" => "spice-it-up", 
						"publication" => "Fox 2 STL Moms", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/stlmoms.com\/2013\/04\/09\/stlmoms-spice-up-your-foods\/", 
						"video_url" => "<script height=\"365px\" width=\"650px\" src=\"http:\/\/player.ooyala.com\/iframe.js#ec=E1dm50YTrYdJgToy9GJ_LWLCjD8LtKiE&pbid=c660b791c3704ff69d4162d7adb7c4a1\"><\/script>", 
						"title" => "Spice Up Your Foods", 
						"published" => "1", 
						"created_at" => "2013-04-19 14:24:00", 
						"direct_link" => "spice-up-your-foods", 
						"publication" => "Fox 2 News", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/www.cosmopolitan.com\/advice\/health\/flat-belly-diet", 
						"video_url" => "", 
						"title" => "Flat Belly Diet", 
						"published" => "1", 
						"created_at" => "2013-05-02 10:05:00", 
						"direct_link" => "flat-belly-diet", 
						"publication" => "Cosmopolitan", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/stlmoms.com\/2013\/05\/16\/jen-mcdaniel-ways-to-ease-pms\/", 
						"video_url" => "<script height=\"365px\" width=\"650px\" src=\"http:\/\/player.ooyala.com\/iframe.js#ec=Z3b2xvYjrFa3T_eSSaAD8Ag9LfrrVlSS&pbid=c660b791c3704ff69d4162d7adb7c4a1\"><\/script>", 
						"title" => "Foods to Ease PMS", 
						"published" => "1", 
						"created_at" => "2013-05-17 09:08:00", 
						"direct_link" => "foods-to-ease-pms", 
						"publication" => "STL Moms Fox 2 KTVI", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/stlmoms.com\/2013\/05\/30\/summer-break-eating-habits-for-kids\/", 
						"video_url" => "<script height=\"365px\" width=\"650px\" src=\"http:\/\/player.ooyala.com\/iframe.js#pbid=c660b791c3704ff69d4162d7adb7c4a1&ec=d3bjQxYzopmPipJtMd9vKhhWBiCqiuZu\"><\/script>", 
						"title" => "Keeping Your Child's Body & Brain Healthy over the Summer Season", 
						"published" => "1", 
						"created_at" => "2013-05-30 12:30:00", 
						"direct_link" => "keeping-your-childs-body-brain-healthy-over-the-summer-season", 
						"publication" => "Fox 2 KTVI STL Moms", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/stlmoms.com\/2013\/06\/26\/jen-mcdaniel-properly-grilling-your-meat\/", 
						"video_url" => "<script height=\"365px\" width=\"650px\" src=\"http:\/\/player.ooyala.com\/iframe.js#ec=d4dTd1Yzpv-b5O-wYvtGnU2qjgUfVXsq&pbid=c660b791c3704ff69d4162d7adb7c4a1\"><\/script>", 
						"title" => "Healthy Grilling!", 
						"published" => "1", 
						"created_at" => "2013-06-26 12:41:00", 
						"direct_link" => "healthy-grilling", 
						"publication" => "STL Moms Fox 2 KTVI", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/stlmoms.com\/2013\/07\/09\/jen-mcdaniel-how-to-shut-down-emotional-eating\/", 
						"video_url" => "<script height=\"365px\" width=\"650px\" src=\"http:\/\/player.ooyala.com\/iframe.js#pbid=c660b791c3704ff69d4162d7adb7c4a1&ec=pxN2Y1ZDqVCEKNS2vmwHdkZ1TfE0oYrH\"><\/script>", 
						"title" => "Shut Down Emotional Eating", 
						"published" => "1", 
						"created_at" => "2013-07-09 13:15:00", 
						"direct_link" => "shut-down-emotional-eating", 
						"publication" => "STL Moms KTVI", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/theblot.com\/kim-kardashian-post-baby-bod-is-insulting-to-women\/", 
						"video_url" => "", 
						"title" => "Kardashian Post-Baby Bod Mag Cover Dangerous to Women", 
						"published" => "1", 
						"created_at" => "2013-07-31 14:12:00", 
						"direct_link" => "kardashian-post-baby-bod-mag-cover-dangerous-to-women", 
						"publication" => "The Blot Magazine", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/www.fitbie.com\/2013\/07\/31\/simple-tip-for-kids-to-eat-veggies?blog_cat=juice-bar", 
						"video_url" => "", 
						"title" => "6 Ways to Sneak Veggies into Your Child’s Diet", 
						"published" => "1", 
						"created_at" => "2013-08-02 14:13:00", 
						"direct_link" => "6-ways-to-sneak-veggies-into-your-child’s-diet", 
						"publication" => "Fitbie.com", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/stlmoms.com\/2013\/08\/02\/avoiding-the-freshman-15-with-jen-mc-daniels\/", 
						"video_url" => "<script height=\"365px\" width=\"650px\" src=\"http:\/\/player.ooyala.com\/iframe.js#ec=ZsbmVyZDqsYSpEmcjYcgYwFWjq1IZLsD&pbid=c660b791c3704ff69d4162d7adb7c4a1\"><\/script>", 
						"title" => "Avoiding the Freshman 15", 
						"published" => "1", 
						"created_at" => "2013-08-02 14:14:00", 
						"direct_link" => "avoiding-the-freshman-15", 
						"publication" => "STL Moms Fox 2 Live!", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/stlmoms.com\/2013\/08\/12\/great-breakfast-choices-for-back-to-school\/", 
						"video_url" => "<script height=\"365px\" width=\"650px\" src=\"http:\/\/player.ooyala.com\/iframe.js#pbid=c660b791c3704ff69d4162d7adb7c4a1&ec=s1cDd1ZDo21M4e5a5N_5Ew49kjyQ3z9b\"><\/script>", 
						"title" => "The ABC's of an A+ Breakfast", 
						"published" => "1", 
						"created_at" => "2013-08-12 10:09:00", 
						"direct_link" => "the-abcs-of-an-a-breakfast", 
						"publication" => "STL Moms KTVI Live!", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/stlmoms.com\/2013\/10\/29\/jen-mcdaniel-tips-to-a-healthier-halloween\/", 
						"video_url" => "<script height=\"365px\" width=\"650px\" src=\"http:\/\/player.ooyala.com\/iframe.js#ec=U2aHRpZzqnyspwWE8JenFBnsn0jbWe6G&pbid=c660b791c3704ff69d4162d7adb7c4a1\"><\/script>", 
						"title" => "Tips for a Healthier Halloween", 
						"published" => "1", 
						"created_at" => "0000-00-00 00:00:00", 
						"direct_link" => "tips-for-a-healthier-halloween", 
						"publication" => "STL Moms", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/stlmoms.com\/2013\/10\/29\/jen-mcdaniel-tips-to-a-healthier-halloween\/", 
						"video_url" => "<script height=\"365px\" width=\"650px\" src=\"http:\/\/player.ooyala.com\/iframe.js#ec=U2aHRpZzqnyspwWE8JenFBnsn0jbWe6G&pbid=c660b791c3704ff69d4162d7adb7c4a1\"><\/script>", 
						"title" => "Tips for a Healthier Halloween", 
						"published" => "1", 
						"created_at" => "2013-10-29 11:34:00", 
						"direct_link" => "tips-for-a-healthier-halloween", 
						"publication" => "STL Moms", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/fox2now.com\/2013\/11\/04\/jen-mcdaniel-is-going-gluten-free-better-for-you\/", 
						"video_url" => "<script height=\"365px\" width=\"650px\" src=\"http:\/\/player.ooyala.com\/iframe.js#pbid=c660b791c3704ff69d4162d7adb7c4a1&ec=BwYWlyZzr508_sHblwMBO_VSqWf1anPF\"><\/script>", 
						"title" => "Will going gluten-free help me lose weight?", 
						"published" => "1", 
						"created_at" => "2013-11-04 11:35:00", 
						"direct_link" => "will-going-gluten-free-help-me-lose-weight", 
						"publication" => "Fox 2 News in the Morning", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/stlmoms.com\/2013\/11\/19\/jen-mcdaniel-nutritional-info-and-health-apps-for-kids\/", 
						"video_url" => "<script height=\"365px\" width=\"650px\" src=\"http:\/\/player.ooyala.com\/iframe.js#pbid=c660b791c3704ff69d4162d7adb7c4a1&ec=Y4bmFnaDqadRJwXvw1L12XmneBu3UrL6\"><\/script>", 
						"title" => "3 Top Sites for Kid's Nutrition Information", 
						"published" => "1", 
						"created_at" => "2013-11-19 10:51:00", 
						"direct_link" => "3-top-sites-for-kids-nutrition-information", 
						"publication" => "Fox 2 KTVI STL Moms", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/stlmoms.com\/2013\/11\/26\/add-super-foods-to-your-diet-to-fight-illness-and-add-nutrition\/", 
						"video_url" => "<script height=\"365px\" width=\"650px\" src=\"http:\/\/player.ooyala.com\/iframe.js#pbid=c660b791c3704ff69d4162d7adb7c4a1&ec=NtYnNxaDqlXoRQkloQMhJqSk5j0XA29U\"><\/script>", 
						"title" => "5 Holiday Superfoods & Tips to Get Them Into Your Everyday Diet!", 
						"published" => "1", 
						"created_at" => "2013-11-26 09:55:00", 
						"direct_link" => "5-holiday-superfoods-tips-to-get-them-into-your-everyday-diet", 
						"publication" => "STL Moms KTVI Fox 2", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/stlmoms.com\/2014\/02\/13\/jen-mcdaniel-heart-misconceptions\/", 
						"video_url" => "<script height=\"365px\" width=\"650px\" src=\"http:\/\/player.ooyala.com\/iframe.js#pbid=c660b791c3704ff69d4162d7adb7c4a1&ec=lhcmVuazq1Ms_iarnAAxUC4tWtbr76_s\"><\/script>", 
						"title" => "3 Top Heart Health Myths", 
						"published" => "1", 
						"created_at" => "2014-02-13 10:38:00", 
						"direct_link" => "3-top-heart-health-myths", 
						"publication" => "STL Moms Fox 2 News", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/stlmoms.com\/2014\/02\/27\/new-fda-rules-for-food-labels\/", 
						"video_url" => "<script height=\"365px\" width=\"650px\" src=\"http:\/\/player.ooyala.com\/iframe.js#pbid=c660b791c3704ff69d4162d7adb7c4a1&ec=Axdmd3azrRiLFu2OHl2mjRaHFZzw5GIu\"><\/script>", 
						"title" => "Food Label Overhaul", 
						"published" => "1", 
						"created_at" => "2014-02-27 10:11:00", 
						"direct_link" => "food-label-overhaul", 
						"publication" => "STL Moms KTVI Live!", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/stlmoms.com\/2014\/03\/14\/jen-mcdaniel-boosting-flavors-in-food\/", 
						"video_url" => "<script height=\"365px\" width=\"650px\" src=\"http:\/\/player.ooyala.com\/iframe.js#pbid=c660b791c3704ff69d4162d7adb7c4a1&ec=VtMmw2bDpnDnaRhzvSWod4ZlB9nydumK\"><\/script>", 
						"title" => "National Nutrition Month: Enjoy the Taste of Eating Right!", 
						"published" => "1", 
						"created_at" => "2014-03-14 10:59:00", 
						"direct_link" => "national-nutrition-month-enjoy-the-taste-of-eating-right", 
						"publication" => "STL Moms KTVI Live!", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/fox2now.com\/2014\/03\/25\/getting-kids-to-eat-their-fruits-veggies\/", 
						"video_url" => "<script height=\"365px\" width=\"650px\" src=\"http:\/\/player.ooyala.com\/iframe.js#ec=hzeWtkbDqSuDZRsOT8Rtij2AjJhY0mnw&pbid=c660b791c3704ff69d4162d7adb7c4a1\"><\/script>", 
						"title" => "Minimizing Food Waste with Picky Eaters!", 
						"published" => "1", 
						"created_at" => "2014-03-27 10:46:00", 
						"direct_link" => "minimizing-food-waste-with-picky-eaters", 
						"publication" => "STL Moms KTVI", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/fox2now.com\/2014\/04\/22\/when-hunger-turns-to-anger-making-you-hangry\/", 
						"video_url" => "<script height=\"365px\" width=\"650px\" src=\"http:\/\/player.ooyala.com\/iframe.js#pbid=c660b791c3704ff69d4162d7adb7c4a1&ec=N0MjhkbTpV0bb9OLMelm-Pxp87ZoXqQL\"><\/script>", 
						"title" => "Avoiding \"Hanger:\" Angry + Hungry", 
						"published" => "1", 
						"created_at" => "2014-04-22 13:17:00", 
						"direct_link" => "avoiding-hanger-angry-hungry", 
						"publication" => "STL Moms!", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/fox2now.com\/2014\/05\/22\/jen-mcdaniel-food-grilling-safety-tips\/", 
						"video_url" => "<script height=\"433px\" width=\"770px\" src=\"http:\/\/player.ooyala.com\/iframe.js#ec=kxOWswbjotDloR9fgOKMihpWIU8pPMuf&pbid=c660b791c3704ff69d4162d7adb7c4a1\"><\/script>", 
						"title" => "Your 3 Step Grill Guide to Safe & Healthy Food!", 
						"published" => "1", 
						"created_at" => "2014-05-22 13:19:00", 
						"direct_link" => "your-3-step-grill-guide-to-safe-healthy-food", 
						"publication" => "STL Moms KTVI", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/fox2now.com\/2014\/08\/21\/stlmoms-kids-and-bad-snacking-habits\/", 
						"video_url" => "<script height=\"433px\" width=\"770px\" src=\"http:\/\/player.ooyala.com\/iframe.js#ec=dvbGlybzoYquRYZxf-XtXxEedZjRVbXC&pbid=c660b791c3704ff69d4162d7adb7c4a1\"><\/script>", 
						"title" => "Attack the Snack! Healthy Guide for Kid's Snacking", 
						"published" => "1", 
						"created_at" => "2014-08-21 14:33:00", 
						"direct_link" => "attack-the-snack-healthy-guide-for-kids-snacking", 
						"publication" => "STL MOMS", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/fox2now.com\/2014\/09\/09\/jen-mcdaniel-childs-eating-habits-could-be-determined-before-birth\/", 
						"video_url" => "<script height=\"433px\" width=\"770px\" src=\"http:\/\/player.ooyala.com\/iframe.js#ec=dtc2k3cDqgxmhCEea95W0hYpa7T6cLdn&pbid=c660b791c3704ff69d4162d7adb7c4a1\"><\/script>", 
						"title" => "Child's Eating Habits Determined Before Birth", 
						"published" => "1", 
						"created_at" => "2014-09-09 11:21:00", 
						"direct_link" => "childs-eating-habits-determined-before-birth", 
						"publication" => "STL Moms KTVI", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/fox2now.com\/2014\/09\/25\/stlmoms-reorganize-your-kitchen-for-healthier-eating-habits\/", 
						"video_url" => "<script height=\"433px\" width=\"770px\" src=\"http:\/\/player.ooyala.com\/iframe.js#pbid=c660b791c3704ff69d4162d7adb7c4a1&ec=Q3bHZvcDonvq2OlQ3XdjWjmVYkQuKFLY\"><\/script>", 
						"title" => "Reorganize Your Kitchen and Lose Weight!", 
						"published" => "1", 
						"created_at" => "2014-09-25 09:30:00", 
						"direct_link" => "reorganize-your-kitchen-and-lose-weight", 
						"publication" => "STL Moms Fox 2", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/fox2now.com\/2014\/11\/18\/reducing-your-calories-could-slow-the-aging-process\/", 
						"video_url" => "<script height=\"433px\" width=\"770px\" src=\"http:\/\/player.ooyala.com\/iframe.js#ec=RxOXRycTpam-G0cPzkaUZD3h-8tJmyvt&pbid=c660b791c3704ff69d4162d7adb7c4a1\"><\/script>", 
						"title" => "Social Eating Strategies for the Holidays", 
						"published" => "1", 
						"created_at" => "2014-11-18 19:38:00", 
						"direct_link" => "social-eating-strategies-for-the-holidays", 
						"publication" => "Fox 2 STL Mom", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/fox2now.com\/2015\/01\/13\/which-diet-trends-to-try-in-2015\/", 
						"video_url" => "<script height=\"433px\" width=\"770px\" src=\"http:\/\/player.ooyala.com\/iframe.js#pbid=c660b791c3704ff69d4162d7adb7c4a1&ec=lnYzdycjqkRkTPrnY2G2jdLRdoaLGcDV\"><\/script>", 
						"title" => "3 Hot Food Trends for 2015", 
						"published" => "1", 
						"created_at" => "2015-01-13 14:12:00", 
						"direct_link" => "3-hot-food-trends-for-2015", 
						"publication" => "Fox 2 KTVI Morning Show", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/fox2now.com\/2015\/01\/27\/diets-for-adults-may-not-be-healthy-for-children\/", 
						"video_url" => "<script height=\"433px\" width=\"770px\" src=\"http:\/\/player.ooyala.com\/iframe.js#ec=RuMHkwczrAc7LUhbXXg4q7XuQPJAhvDz&pbid=c660b791c3704ff69d4162d7adb7c4a1\"><\/script>", 
						"title" => "Diets that are NOT Kid-Friendly", 
						"published" => "1", 
						"created_at" => "2015-01-27 10:44:00", 
						"direct_link" => "diets-that-are-not-kid-friendly", 
						"publication" => "STL MOMS", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/fox2now.com\/2015\/02\/09\/stl-moms-best-chocolate-options-for-the-health-conscious\/", 
						"video_url" => "<script height=\"433px\" width=\"770px\" src=\"http:\/\/player.ooyala.com\/iframe.js#pbid=c660b791c3704ff69d4162d7adb7c4a1&ec=VtOHI4czoOeBA_AGOQHBIZokjLe3jUac\"><\/script>", 
						"title" => "Eat Your Heart Out! Chocolate & Heart Health", 
						"published" => "1", 
						"created_at" => "2015-02-09 10:35:00", 
						"direct_link" => "eat-your-heart-out-chocolate-heart-health", 
						"publication" => "STL Moms", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/fox2now.com\/2015\/03\/26\/healthy-snacks-for-national-nutrition-month\/", 
						"video_url" => "<script height=\"433px\" width=\"770px\" src=\"http:\/\/player.ooyala.com\/iframe.js#ec=E5bzg3dDpPOLdqG3cGiyyOxbfBkW-R8d&pbid=c660b791c3704ff69d4162d7adb7c4a1\"><\/script>", 
						"title" => "Healthy snacks for National Nutrition Month", 
						"published" => "1", 
						"created_at" => "2015-03-26 08:49:00", 
						"direct_link" => "healthy-snacks-for-national-nutrition-month", 
						"publication" => "Fox 2 Now", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/fox2now.com\/2015\/04\/23\/nutritional-tips-to-pump-up-brain-power\/", 
						"video_url" => "<script height=\"433px\" width=\"770px\" src=\"http:\/\/player.ooyala.com\/iframe.js#pbid=c660b791c3704ff69d4162d7adb7c4a1&ec=RzdXdvdDqQilZpTC6wASJXngbNl7Lh7_\"><\/script>", 
						"title" => "Brain Foods", 
						"published" => "1", 
						"created_at" => "2015-04-23 10:18:00", 
						"direct_link" => "brain-foods", 
						"publication" => "STL Moms Fox 2 Live", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/fox2now.com\/2015\/05\/07\/stlmoms-children-emotional-eating\/#ooid=RxN2V4dDr1Fza_z0Y9QCWK_Yu7Rz9G_g", 
						"video_url" => "<script height=\"433px\" width=\"770px\" src=\"http:\/\/player.ooyala.com\/iframe.js#pbid=c660b791c3704ff69d4162d7adb7c4a1&ec=RxN2V4dDr1Fza_z0Y9QCWK_Yu7Rz9G_g\"><\/script>", 
						"title" => "Kids & Emotional Eating", 
						"published" => "1", 
						"created_at" => "2015-05-07 13:32:00", 
						"direct_link" => "kids-emotional-eating", 
						"publication" => "Fox 2 STL Moms", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/fox2now.com\/2015\/06\/25\/stlmoms-picky-eaters\/", 
						"video_url" => "<script height=\"433px\" width=\"770px\" src=\"http:\/\/player.ooyala.com\/iframe.js#ec=lrdDF2dTqvFEqEWdh60lSbaMpkrmc1y1&pbid=c660b791c3704ff69d4162d7adb7c4a1\"><\/script>", 
						"title" => "Kids & Picky Eating Pitfalls", 
						"published" => "1", 
						"created_at" => "2015-06-25 12:58:00", 
						"direct_link" => "kids-picky-eating-pitfalls", 
						"publication" => "STL Moms", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/fox2now.com\/2015\/07\/28\/stlmomschildhood-obesity-spikes-in-the-summer\/", 
						"video_url" => "<script height=\"433px\" width=\"770px\" src=\"http:\/\/player.ooyala.com\/iframe.js#pbid=c660b791c3704ff69d4162d7adb7c4a1&ec=12aXFqdjomQR0S7L77RRP-mOa0BEo3jc\"><\/script>", 
						"title" => "Child Obesity: Weight Gain Spikes in Summer", 
						"published" => "1", 
						"created_at" => "2015-07-28 12:23:00", 
						"direct_link" => "child-obesity-weight-gain-spikes-in-summer", 
						"publication" => "Stl Moms", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/fox2now.com\/2015\/08\/25\/abcs-of-a-better-breakfast\/", 
						"video_url" => "<script height=\"433px\" width=\"770px\" src=\"http:\/\/player.ooyala.com\/iframe.js#ec=Qydnk2dzpc8hdleBcSH6VgrLFgsbB-yH&pbid=c660b791c3704ff69d4162d7adb7c4a1\"><\/script>", 
						"title" => "ABC's of an A+ Breakfast - Fox 2 Live!", 
						"published" => "1", 
						"created_at" => "2015-08-27 04:36:00", 
						"direct_link" => "abcs-of-an-a-breakfast---fox-2-live", 
						"publication" => "Stl moms", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/fox2now.com\/2015\/09\/17\/stlmoms-healthy-eating-during-pregnancy\/", 
						"video_url" => "<script height=\"433px\" width=\"770px\" src=\"http:\/\/player.ooyala.com\/iframe.js#ec=ZvMW1rdzpKg6mZUKpx0Ynhu2JDDZ_dI0&pbid=c660b791c3704ff69d4162d7adb7c4a1\"><\/script>", 
						"title" => "What Pregnant Women REALLY Eat", 
						"published" => "1", 
						"created_at" => "2015-09-17 13:03:00", 
						"direct_link" => "what-pregnant-women-really-eat", 
						"publication" => "STL Moms Fox 2", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/fox2now.com\/2015\/10\/29\/minimizing-risks-of-children-developing-food-alergies\/", 
						"video_url" => "<script height=\"433px\" width=\"770px\" src=\"http:\/\/player.ooyala.com\/iframe.js#pbid=c660b791c3704ff69d4162d7adb7c4a1&ec=x5NzRoeDrTCyANWLIAS2quUaUGtfpZys\"><\/script>", 
						"title" => "Halloween & Food Allergies", 
						"published" => "1", 
						"created_at" => "2015-10-29 11:03:00", 
						"direct_link" => "halloween-food-allergies", 
						"publication" => "STL Moms", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/fox2now.com\/2015\/11\/12\/what-you-need-to-do-to-reduce-your-risk-of-cancer-from-processed-meat\/", 
						"video_url" => "<script src=\"http:\/\/player.ooyala.com\/iframe.js#ec=U1dnFzeDpAi0pnbcTifQVJaIyGOZutee&pbid=c660b791c3704ff69d4162d7adb7c4a1\"><\/script>", 
						"title" => "Healthy Eating Strategies for the Bacon Lover (and other processed meats)", 
						"published" => "1", 
						"created_at" => "2015-11-12 12:32:00", 
						"direct_link" => "healthy-eating-strategies-for-the-bacon-lover-and-other-processed-meats", 
						"publication" => "STL Moms", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/fox2now.com\/2016\/03\/24\/stl-moms-mindful-eating-habits-for-children\/", 
						"video_url" => "<script height=\"433px\" width=\"770px\" src=\"http:\/\/player.ooyala.com\/iframe.js#ec=U3cWNiMjE6MFLvLxoOentvUTSm3TeFsQ&pbid=c660b791c3704ff69d4162d7adb7c4a1\"><\/script>", 
						"title" => "In The Media!", 
						"published" => "1", 
						"created_at" => "2016-03-24 06:24:00", 
						"direct_link" => "in-the-media", 
						"publication" => "Fox 2 News", 
						"user_id" => "2", 
				],
				[ 
						"link" => "http:\/\/fox2now.com\/2016\/04\/26\/stl-moms-avoid-these-ultra-processed-foods\/", 
						"video_url" => "<script height=\"433px\" width=\"770px\" src=\"http:\/\/player.ooyala.com\/iframe.js#ec=BqN2g0MzE6wcdCza8SLpUyTYN6xmDjPK&pbid=c660b791c3704ff69d4162d7adb7c4a1\"><\/script>", 
						"title" => "Ultra-Processed Foods - 3 Better Options", 
						"published" => "1", 
						"created_at" => "2016-04-26 15:13:00", 
						"direct_link" => "ultra-processed-foods---3-better-options", 
						"publication" => "STL Moms", 
						"user_id" => "2", 
				]
			]; 

			DB::table("appearances")->insert($item); 

		} 

	}