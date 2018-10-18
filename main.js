var current_dir = "~";

function process() {
	$(".command:last").prop("readonly", true);
	var command_parsed = ($(".command:last").val()).split(" ");
	switch (command_parsed[0]) {
		case "cd":
			if (command_parsed.length == 1) {
				$("#output").append("<p>" + $(".command:last").val() + ": command not found</p>");
				append_input();
				return false;
			}
			var subarray = command_parsed.slice(1, command_parsed.length);
			console.log("joined: " + subarray.join(" "));
			process_cd(subarray.join(" "));
			return false;
		case "open":
			if (command_parsed.length == 1) {
				$("#output").append("<p>" + $(".command:last").val() + ": command not found</p>");
				append_input();
				return false;
			}
			var subarray = command_parsed.slice(1, command_parsed.length);
			process_open(subarray.join(" "));
			return false;
		case "ls":
			if (current_dir === "~") {
				$("#output").append("<p>about &nbsp; &nbsp; &nbsp; &nbsp; contact</p>");
				//$("#output").append("<p>resume &nbsp; &nbsp; &nbsp; &nbsp;contact</p>");
			//} else if (current_dir === "projects") {
				//$("#output").append("<p>type 'open <i>project-name</i>' for more information about any of these projects");
				//$("#output").append("<p>bookmarks feed <span id='projects-1'>shell</span></p>");
				//$("#output").append("<p>mimera <span id='projects-2'>smartbets</span></p>");
				//$("#output").append("<p>personal site <span id='projects-3'>toast-printer</span></p>");
				//$("#output").append("<p>share-yo <span id='projects-4'>voicebox</span></p>");
			}
			append_input();
			return false;
		case "clear":
			$("#output").empty();
			$("input[type=text], textarea").val("");
			$(".command").prop("readonly", false);
			$(".command:last").focus();
			return false;
		case "help":
			$("#output").append("<p>ls <span class='blue' id='help-ls'>- list the menu sections</span></p>");
			$("#output").append("<p>cd <i>section-name</i> <span class='blue' id='help-cd'>- change to section 'section-name'</span></p>");
			$("#output").append("<p>cd .. <span class='blue' id='help-cd2'>- change back to previous section</span></p>");
			$("#output").append("<p>clear <span class='blue' id='help-clear'>- clear output</span></p>");
			append_input();
			return false;
		default:
			$("#output").append("<p>" + $(".command:last").val() + ": command not found</p>");
			append_input();
			return false;
	}
}

function process_cd(directory) {
	if (current_dir === "~") {
		switch (directory) {
			case "about":
				$("#output").append("<p id='about'>Hello, My Name is Putu Jaya Adi Pranata!</p>");
				$("#output").append("<p>----------------------------------------</p>");
				$("#output").append("<p>type 'cd ..' to return home</p>");
				current_dir = "about";
				append_input();
				return false;
			/*case "projects":
				current_dir = "projects";
				$("#output").append("<p>type 'ls' for a list of projects</p>");
				$("#output").append("<p>type 'cd ..' to return</p>");
				append_input();
				return false;
			case "resume":
				current_dir = "resume";
				$("#output").append("<p><a href='resume.pdf'>my resume</a>, last updated <span class='blue'>apr '16</span>");
				append_input();
				return false;*/
			case "contact":
				current_dir = "contact";
				$("#output").append("<p><a href='mailto:all.officialputuid'>Email</a> | <a href='https://www.facebook.com/officialputuid'>Facebook</a> | <a href='https://github.com/officialputuid'>Github</a> | <a href='https://twitter.com/officialputuid'>Twitter</a>");
				append_input();
				return false;
			default: 
				$("#output").append("<p>no such file or directory</p>");
				append_input();
				return false;
		}
	} else {
		if (directory === "..") {
			current_dir = "~";
			$("#output").append("<br>");
		} else {
			$("#output").append("<p>no such file or directory</p>");
		}
		append_input();
	}
}

/*function process_open(file) {
	if (current_dir === "projects") {
		switch (file) {
			case "bookmarks feed":
				$("#output").append("<p><span class='blue'>sept '14</span> | <a href='http://www.github.com/helenqu/bookmarks-feed'>github.com/helenqu/bookmarks-feed</a></p>");
				$("#output").append("<p>my first coding project outside of schoolwork -- a simple chrome extension that displays your ten most recently added bookmarks</p>");
				append_input();
				return false;
			case "mimera":
				$("#output").append("<p><span class='blue'>jan - march '16</span> | <a href='http://www.mimera.co'>mimera.co</a></p>");
				$("#output").append("<p>a simple new tab page, images courtesy of unsplash, for anyone who shares my aesthetic</p>");
				append_input();
				return false;
			case "personal site":
				$("#output").append("<p><span class='blue'>march  - apr '16</span> | <a href='http://www.helenqu.com'>helenqu.com</a></p>");
				$("#output").append("<p>a bash-style redesign of my personal website</p>");
				append_input();
				return false;
			case "share-yo":
				$("#output").append("<p><span class='blue'>nov '14 (@ yhack fall '14)</span> | devpost staff pick | <a href='http://www.github.com/helenqu/share-yo'>github.com/helenqu/share-yo</a></p>");
				$("#output").append("<p>my first hackathon project -- a chrome extension that shares your current webpage via Yo</p>");
				append_input();
				return false;
			case "shell":
				$("#output").append("<p class='blue'>oct '15</p>");
				$("#output").append("<p>a simple shell implementation (an operating systems class project) with two-level pipelines and input/output redirection</p>");
				append_input();
				return false;
			case "smartbets":
				$("#output").append("<p><span class='blue'>feb '15 (@ vthacks '15)</span> | <a href='http://www.github.com/shauryarjain/SmartBets'>github.com/shauryarjain/SmartBets</a></p>");
				$("#output").append("<p>a web app that allows you to make bets in real time with venmo</p>");
				append_input();
				return false;
			case "toast-printer":
				$("#output").append("<p><span class='blue'>apr '16 (@ hackny spring '16)</span> | 2nd place | <a href='http://www.github.com/helenqu/toast-printer'>github.com/helenqu/toast-printer</a></p>");
				$("#output").append("<p>a contraption that will toast any image onto a piece of bread");
				append_input();
				return false;
			case "voicebox":
				$("#output").append("<p><span class='blue'>nov '14 (@ hackprinceton fall '14)</span> | top 20 hack | <a href='http://www.github.com/dhruvag/VoiceBox'>github.com/dhruvag/VoiceBox</a></p>");
				$("#output").append("<p>voice controlled search, archive, etc for email management + unread email previews read out loud</p>");
				append_input();
				return false;
			default:
				$("#output").append("<p>no such file or directory</p>");
				append_input();
				return false;
		}
	} else {
		$("#output").append("<p>no such file or directory</p>");
		append_input();
	}
}*/

function append_input() {
	$("#output").append("<div class='terminal_line'>:" + current_dir + "$ &nbsp; <form name='terminal' action='#' method='post' onsubmit='return process()'><input type='text' class='command'></form></div>");
	$(".command:last").focus();
}
// 	switch ($(".command:last").val()) {
// 		case "ls":
// 			if (current_dir === "~") {
// 				$("#output").append("<p>about &nbsp; &nbsp; &nbsp; &nbsp; projects</p>");
// 				$("#output").append("<p>resume &nbsp; &nbsp; &nbsp; &nbsp;contact</p>");
// 			} else if (current_dir === "projects") {
// 				$("#output").append("<p>bookmarks feed <span id='projects-1'>shell</span></p>");
// 				$("#output").append("<p>mimera <span id='projects-2'>smartbets</span></p>");
// 				$("#output").append("<p>personal site <span id='projects-3'>voicebox</span></p>");
// 				$("#output").append("<p>share-yo</p>");
// 			}
// 			$("#output").append("<div class='terminal_line'>:" + current_dir + "$ &nbsp; <form name='terminal' action='#' method='post' onsubmit='return process()'><input type='text' class='command'></form></div>");
// 			$(".command:last").focus();
// 			return false;
// 		case "cd about":
// 			if (current_dir === "~") {
// 				// window.open("about.html","_self");
// 				$("#output").append("<p id='about'>i'm currently a junior studying computer science at the university of pennsylvania. i appreciate minimalist design, quaint coffee shops, and baking reality shows much more than is appropriate.</p>");
// 				$("#output").append("<p>-------------------------------------------------</p>");
// 				$("#output").append("<p>type 'cd ..' to return home</p>");
// 				current_dir = "about";
// 			} else {
// 				$("#output").append("<p>no such file or directory</p>");
// 			}
// 			$("#output").append("<div class='terminal_line'>:" + current_dir + "$ &nbsp; <form name='terminal' action='#' method='post' onsubmit='return process()'><input type='text' class='command'></form></div>");
// 			$(".command:last").focus();
// 			return false;
// 		case "cd projects":
// 			if (current_dir === "~") {
// 				current_dir = "projects";
// 				$("#output").append("<p>type 'ls' for a list of projects");
// 			} else {
// 				$("#output").append("<p>no such file or directory</p>");
// 			}
// 			$("#output").append("<div class='terminal_line'>:" + current_dir + "$ &nbsp; <form name='terminal' action='#' method='post' onsubmit='return process()'><input type='text' class='command'></form></div>");
// 			$(".command:last").focus();
// 			return false;
// 		case "cd resume":
// 			if (current_dir === "~") {
// 				window.open("resume.html","_self");
// 				current_dir = "resume";	
// 			} else {
// 				$("#output").append("<p>no such file or directory</p>");
// 			}
// 			$("#output").append("<div class='terminal_line'>:" + current_dir + "$ &nbsp; <form name='terminal' action='#' method='post' onsubmit='return process()'><input type='text' class='command'></form></div>");
// 			$(".command:last").focus();
// 			return false;
// 		case "cd contact":
// 			if (current_dir === "~") {
// 				window.open("contact.pdf","_self");
// 				current_dir = "contact";	
// 			} else {
// 				$("#output").append("<p>no such file or directory</p>");
// 			}
// 			$("#output").append("<div class='terminal_line'>:" + current_dir + "$ &nbsp; <form name='terminal' action='#' method='post' onsubmit='return process()'><input type='text' class='command'></form></div>");
// 			$(".command:last").focus();
// 			return false;
// 		case "cd ..":
// 			current_dir = "~";
// 			$("#output").append("<div class='terminal_line'>:" + current_dir + "$ &nbsp; <form name='terminal' action='#' method='post' onsubmit='return process()'><input type='text' class='command'></form></div>");
// 			$(".command:last").focus();
// 		case "clear":
// 			$("#output").empty();
// 			$("input[type=text], textarea").val("");
// 			$(".command").prop("readonly", false);
// 			$(".command:last").focus();
// 			return false;
// 		case "help":
// 			$("#output").append("<p>ls <span class='description' id='help-ls'>- list the menu sections</span></p>");
// 			$("#output").append("<p>cd 'section-name' <span class='description' id='help-cd'>- change to section 'section-name'</span></p>");
// 			$("#output").append("<p>clear <span class='description' id='help-clear'>- clear output</span></p>");
// 			$("#output").append("<div class='terminal_line'>:" + current_dir + "$ &nbsp; <form name='terminal' action='#' method='post' onsubmit='return process()'><input type='text' class='command'></form></div>");
// 			$(".command:last").focus();
// 			return false;
// 		default:
// 			$("#output").append("<p>" + $(".command:last").val() + ": command not found</p>");
// 			$("#output").append("<div class='terminal_line'>:" + current_dir + "$ &nbsp; <form name='terminal' action='#' method='post' onsubmit='return process()'><input type='text' class='command'></form></div>");
// 			$(".command:last").focus();
// 			return false;
// 	}
// }

function showTerminal(selector) {
	console.log(selector);
	$(selector).hide();
	$("#terminal").show();
}

function showPage(selector) {
	console.log("showpage");
	$("#terminal").hide();
	$(selector).show();
}

