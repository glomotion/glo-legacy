
// remap jQuery to $
(function($){

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;

	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */ 



})(window.jQuery);


// Vanilla Javascript / Funcitons --------------------------------------------------------------------------------------

 /* date.js - Custom Date methods
 * addDays
 * addWeeks
 * addYears
 * addMonths
 * addMonthsTrunc
 * copy
 * getDaysBetween
 * getCDay
 * getDayName
 * getDayOfYear
 * getCMonth
 * getMonthName
 * getWeekDays
 * addWeekDays
 * getMonthsBetween
 * getYearsBetween
 * getAge
 * lastDay
 * sameDayEachWeek
 * to12HourString
 * to24HourString
 */

Date.prototype.DAYNAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
Date.prototype.MONTHNAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
Date.prototype.msPERMIN = 1000 * 60;
Date.prototype.msPERDAY = 1000 * 60 * 60 * 24;

Date.prototype.addWeekDays = function(d) {
    /* Adds the necessary number of days
     * to the date to include the required
     * weekdays.
     */
    var startDay = this.getDay();    //day of week 0 through 6
    var wkEnd = 0;              //number of weekends needed
    var m = d % 5;              //number of weekdays for partial week

    if (d < 0) {
        wkEnd = Math.ceil(d/5); //Yields a negative number of weekends

        switch (startDay) {
        case 6: 			//Staring day Sat. 1 less weekend
            if (m == 0 && wkEnd < 0) 
				wkEnd++;
            break;
        case 0:
            if (m == 0) 
				d++;        //decrease - part of weekend
            else 
				d--;        //increase - part of weekend
            break;
        default:
            if (m <= -startDay) 
				wkEnd--;	//add weekend if not enough days to cover
        }
    }
    else if (d > 0) {
        wkEnd = Math.floor(d/5);

        switch (startDay) {
        case 6:
            if (m == 0) 
				d--;
            else 
				d++;
            break;
        case 0:
            if (m == 0 && wkEnd > 0) 
				wkEnd--;
            break;
        default:
            if (5 - startDay < m) 
				wkEnd++;
        }
    }

    d += wkEnd * 2; //Add weekends to weekdays needed

    this.addDays(d);
};
Date.prototype.addDays = function(d) {
        /* Adds the number of days to the date */
        this.setDate( this.getDate() + d );
    };
Date.prototype.addWeeks = function(w) {
        /* Adds the number of weeks to the date */
        this.setDate(this.addDays(w * 7));
    };
Date.prototype.addMonths = function(m) {
        /* Adds the number of months to date
         * If starting with a day that is
         * greater than the number of days
         * in the new month the new date is
         * in the next month
         */
        this.setMonth(this.getMonth() + m);
    };
Date.prototype.addMonthsTrunc = function(m) {
        /* Adds the number of months to date,
         * but unlike addMonths this method
         * truncates extra days at end of month
         * when the start day of month is greater
         * than the number of days in the target
         * ending month (js overflows into the following month)
         */
         var d = this.getDate();
         this.setMonth(this.getMonth() + m);

         /* Adjust when original month has more days then new month and overflows */
         if (this.getDate() < d)
             this.setDate(0);
    };
Date.prototype.addYears = function(y) {
        /* Adds the number of years to date
         * If adding to 2/29 and result is not
         * a leap year the day is set to 28
         */
        var m = this.getMonth();
        this.setFullYear(this.getFullYear() + y);

        //Adjust for leap years
        if (m < this.getMonth()) {
            this.setDate(0);
        }
    };
Date.prototype.copy = function () {
        /* Creates a copy of date by value
         * Normal assignment only creates
         * a reference to the date, whereas
         * this creates a new date object
         */
        return new Date(this.getTime());
    };
Date.prototype.getDaysBetween = function(d) {
        /*Returns number of days between two dates
        * including the last day, but not the first.
        *
        * This is value can be added
        * to one date get the other date.
        */
		var tmp = d.copy();
		tmp.setUTCHours(this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds(), this.getUTCMilliseconds());		

		var time = tmp.getTime() - this.getTime();
		return time/this.msPERDAY;
    };
Date.prototype.getCDay = function() {
        //Returns first 3 letters in day name
        return this.getDayName().slice(0,3);
    };
Date.prototype.getDayName = function() {
        //Returns full name of day
        return this.DAYNAMES[this.getDay()];
    };
Date.prototype.getDayOfYear = function() {
        //Returns day of year 1 through 365 or 366
        var start = new Date(this.getFullYear(), 0, 0);
        return this.getDaysBetween(start) * -1;
    };
Date.prototype.getCMonth = function() {
        //Returns first 3 letters in month name
        return this.getMonthName().slice(0, 3);
    }
Date.prototype.getMonthName = function() {
        //Returns full name of month
        return this.MONTHNAMES[this.getMonth()];
    };
Date.prototype.getWeekDays = function(d) {
        var wkEnds = 0, days = 0;
        var s = 0, e = 0;

        days = Math.abs(this.getDaysBetween(d));

        if (days) {
            s = (d < this) ? d.getDay() : this.getDay() ;
            e = (d < this) ? this.getDay() : d.getDay();

            wkEnds = Math.floor(days/7);

            if (s != 6 && s > e) 
				wkEnds++;
            if (s != e && (s == 6 || e == 6) ) 
				days--;

            days -= (wkEnds * 2);
        }
        return days;
    };
Date.prototype.getMonthsBetween = function(d) {
        //returns months between dates
        var d1 = this.getFullYear() * 12 + this.getMonth();
        var d2 = d.getFullYear() * 12 + d.getMonth();
        return d2 - d1;
    };
Date.prototype.getMonthsBetween2 = function(d) {
	var sDate, eDate;   
	var d1 = this.getFullYear() * 12 + this.getMonth();
	var d2 = d.getFullYear() * 12 + d.getMonth();
	var sign;
	var months = 0;
	var sDay, sLastDay, sAdj, eDay, eLast, eAdj, adj;

	if (this == d) {
		months = 0;
	} else if (d1 == d2) { //same year and month
		months = (d.getDate() - this.getDate())/this.lastday();
	} else {
		if (d1 <  d2) {
			sDate = this;
			eDate = d;
			sign = 1;
		} else {
			sDate = d;
			eDate = this;
			sign = -1;
		}

		sDay = sDate.getDate();
		sLastDay = sDate.lastday();
		eDay = eDate.getDate();
		eLastDay = eDate.lastday();

		if (sDay > eLastDay) {
			adj = eDay/eLastDay;
		} else {
			sAdj = sLastDay - sDay;
			eAdj = eDay > sLastDay ? sLastDay : eDay;
			adj = (sAdj + eAdj)/sLastDay;
		}
		months = Math.abs(d2 - d1) + (adj -1);

		if (months % 1 != 0 )
			months = (months * sign).toFixed(2);
		else
			months = (months * sign);
	}
	return months;
}
Date.prototype.getYearsBetween = function(d) {
        //returns years and fraction between dates
        var months = this.getMonthsBetween(d);
        return months/12;
    };
Date.prototype.getAge = function(d) {
		if (!d)
        	d = new Date();

        return this.getYearsBetween(d).toFixed(2);
    };
Date.prototype.lastday = function() {
        //returns number of days in month
        var d = new Date(this.getFullYear(), this.getMonth() + 1, 0);
        return d.getDate();
    };
Date.prototype.sameDayEachWeek = function (d, date) {
        /* Returns array of dates of same day each week in range */
        var aDays = new Array();
        var eDate, nextDate, adj;

        if (this > date) {
            eDate = this;
            nextDate = new Date(date.getTime());
        } else {
            eDate = date;
            nextDate = new Date(this.getTime());
        }

        adj = (d - nextDate.getDay() + 7) %7;
        nextDate.setDate(nextDate.getDate() + adj);

        while (nextDate < eDate) {
            aDays[aDays.length] = new Date(nextDate.getTime() );
            nextDate.setDate(nextDate.getDate() + 7);
        }
        return aDays;
    };
Date.prototype.to12HourString = function () {
    var h = this.getHours();
    var m = "0" + this.getMinutes();
    var s = "0" + this.getSeconds();

    var ap = "am";

    if (h >= 12) {
        ap = "pm";

        if (h >= 13)
            h -= 12;

    } else if (h == 0) {
        h = 12;
	}

    h = "0" + h;
    return h.slice(-2) + ":" + 
           m.slice(-2) + ":" + 
           s.slice(-2) + " " + ap;
}
Date.prototype.to24hourString = function () {
	var h = "0" + this.getHours();
    var m = "0" + this.getMinutes();
    var s = "0" + this.getSeconds();
    return h.slice(-2) + ":" + m.slice(-2) + ":" + s.slice(-2);
}

/* Add built-in method to earlier browsers*/
if (!Date.prototype.toDateString) {
    Date.prototype.toDateString = function() {
            return this.toString().replace(/\d\d:\d\d:\d\d\s\w{2,3}\s/, '');
        };
}
if (!Date.prototype.toLocaleDateString) {
    Date.prototype.toLocaleDateString = function() {
            return (this.getMonth() + 1) + "/" + this.getDate() + "/" + this.getFullYear();
        };
}

function startclock() {
	
	var thetime=new Date();
	
	var nhours=thetime.getHours();
	var nmins=thetime.getMinutes();
	var nday=thetime.getDate();
	var ndayName=thetime.getDayName().toLowerCase();//.substr(0, 6);
	var nmonth=thetime.getMonthName().toLowerCase();
	var nyear=thetime.getFullYear();
	
	var AorP=" ";
	
	if (nhours>=12)
		AorP="pm";
	else
		AorP="am";
	
	if (nhours>=13)
		nhours-=12;
	
	if (nhours==0)
	 nhours=12;
	
	if (nmins<10)
	 nmins="0"+nmins;

	var clock = document.getElementById("d-time")
	clock.innerHTML = 
	"<span id='sp-time'>" + nhours + ":" + nmins + AorP +  "</span>" + 
	"<span id='sp-day'>" + ndayName + "</span>" +
	"<span id='sp-date'>" + nday + " " + nmonth + " " + nyear + "</span>"

	setTimeout('startclock()',30000);

}



// usage: log('inside coolFunc',this,arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
/*window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console){
    console.log( Array.prototype.slice.call(arguments) );
  }
};*/


// catch all document.write() calls
(function(doc){
  var write = doc.write;
  doc.write = function(q){ 
    log('document.write(): ',arguments); 
    if (/docwriteregexwhitelist/.test(q)) write.apply(doc,arguments);  
  };
})(document);


