<!--
// fill the month table with column headings
function day_title(day_name){
     document.write("<TD ALIGN=center WIDTH=35>"+day_name+"</TD>")
}
// fills the month table with numbers
function fill_table(month,month_length)
{ 
  day=1
  // begin the new month table
  document.write("<TABLE BORDER=3 CELLSPACING=3 CELLPADDING=%3><TR>")
  document.write("<TD COLSPAN=7 ALIGN=center><B>"+month+"   "+year+"</B><TR>")
  // column headings
  day_title("Sun")
  day_title("Mon")
  day_title("Tue")
  day_title("Wed")
  day_title("Thu")
  day_title("Fri")
  day_title("Sat")

  // pad cells before first day of month
  document.write("</TR><TR>")
  for (var i=1;i<start_day;i++){
        document.write("<TD>")
  }
  // fill the first week of days
  for (var i=start_day;i<8;i++){
        if (day == z) {
          document.write("<TD ALIGN=center>"+day+"</TD>")
        }
        else  {
          document.write("<TD ALIGN=center>"+day+"</TD>")
        }
        day++
  }
  document.write("<TR>")
  // fill the remaining weeks
  while (day <= month_length) {
     for (var i=1;i<=7 && day<=month_length;i++){
        if (day == z) {
          document.write("<TD ALIGN=center>"+day+"</TD>")
        }
        else  {
          document.write("<TD ALIGN=center>"+day+"</TD>")
        }
         day++
     }
     document.write("</TR><TR>")
     // the first day of the next month
     start_day=i
  }
  document.write("</TR></TABLE><BR>")
}
// end hiding -->

// CAHNGE the below variable to the CURRENT YEAR
year=2016

// first day of the week of the new year
today= new Date("January 1, "+year)
start_day = today.getDay() + 1   // starts with 0

var x = new Date()
var y = x.getMonth() + 1
var z = x.getDate()

if (y == 1) {
fill_table("January",31)
}
if (y == 2) {
fill_table("February",29)
}
if (y == 3) {
fill_table("March",31)
}
if (y == 4) {
fill_table("April",30)
}
if (y == 5) {
fill_table("May",31)
}
if (y == 6) {
fill_table("June",30)
}
if (y == 7) {
fill_table("July",31)
}
if (y == 8) {
fill_table("August",31)
}
if (y == 9) {
fill_table("September",30)
}
if (y == 10) {
fill_table("October",31)
}
if (y == 11) {
fill_table("November",30)
}
if (y == 12) {
fill_table("December",31)
}