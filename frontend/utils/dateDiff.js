let DateDiff = {

  inSeconds: function(d1, d2) {
        let t2 = d2.getTime();
        let t1 = d1.getTime();

        return parseInt((t2-t1)/1000);
    },


  inMinutes: function(d1, d2) {
        let t2 = d2.getTime();
        let t1 = d1.getTime();

        return parseInt((t2-t1)/60000);
    },

  inHours: function(d1, d2) {
        let t2 = d2.getTime();
        let t1 = d1.getTime();

        return parseInt((t2-t1)/3600000);
    },

    inDays: function(d1, d2) {
        let t2 = d2.getTime();
        let t1 = d1.getTime();

        return parseInt((t2-t1)/(24*3600*1000));
    },

    inWeeks: function(d1, d2) {
        let t2 = d2.getTime();
        let t1 = d1.getTime();

        return parseInt((t2-t1)/(24*3600*1000*7));
    },

    inMonths: function(d1, d2) {
        let d1Y = d1.getFullYear();
        let d2Y = d2.getFullYear();
        let d1M = d1.getMonth();
        let d2M = d2.getMonth();

        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },

    inYears: function(d1, d2) {
        return d2.getFullYear()-d1.getFullYear();
    }
}
    
    
export const dateDiffOutput = function (d1) {
  let dateOutput 
  const d2 = new Date()

  let timeLaps = DateDiff.inHours(d1, d2);

  if (timeLaps<24) {
    dateOutput = timeLaps+" hour/s ago";
  } else {
    timeLaps = DateDiff.inDays(d1, d2);
    if (timeLaps<7) {
      dateOutput = timeLaps+" day/s ago";
    } else {
      timeLaps = DateDiff.inWeeks(d1, d2);
      if (timeLaps<4) {
        dateOutput = timeLaps+" week/s ago";
      } else {
        timeLaps = DateDiff.inMonths(d1, d2);
        if (timeLaps<12) {
          dateOutput = timeLaps+" month/s ago";
        } else {
                timeLaps = DateDiff.inYears(d1, d2);
                dateOutput = timeLaps+" year/s ago";
        }
      }
    }
  }    
  
  return dateOutput
}
