function vowelCount(str: any) {
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;
    for(var x = 0; x < str.length ; x++)
    {
      if (vowel_list.indexOf(str[x]) !== -1)
      {
        vcount += 1;
      }
    }
    return vcount;
  }
  console.log(vowelCount("Things will get better"));