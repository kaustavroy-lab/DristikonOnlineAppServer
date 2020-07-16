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
   this[database_length++] = new SearchPage("index.html", "Dristikon Online App 2.1", "Drawing  Cooking  Dance  Popular Bengali Songs  Bengali Poems  Hindi Songs  English Songs  In Your Language  Interviews  Short films  Popular Videos  Audio-Drama/ Story Plays  Dristikon Online App 2.2 © Copyright 2020 Dristikon, Tarakeswar  Designed & Developed by Kaustav Roy  2   ", "");
   return this;
}
