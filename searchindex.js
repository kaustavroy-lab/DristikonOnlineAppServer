// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "Dristikon Online App 2.3", "Cooking  Drawing  Dance  English Songs  Hindi Songs  Bengali Poems  Popular Bengali Songs  Interviews  Audio-Drama/ Story Plays  Short films  In Your Language  Popular Videos   1  Val Lage Na   Episode-2  Awkward Conversations with Partners   Dristikon Online  CONTENT DETAILS  Val Lage Na Episode 2  Awkward Conversations with Partners  Casts  Jagnaseni & Soudip Script- Gourav  Direction- Soumyadyuti VFX and Editing- Kaustav Roy  Dristikon Online App 2.3 © Copyright 2020 Dristikon, Tarakeswar  Designed & Developed by Kaustav Roy   ", "");
   return this;
}
