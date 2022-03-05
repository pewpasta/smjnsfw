const Discord = require("discord.js-12");
const client = new Discord.Client();
const got = require("got");
const https = require('https');
const hello = ["https://www.reddit.com/r/porn/random/.json", "https://www.reddit.com/r/porngifs/random/.json", "https://www.reddit.com/r/porn_gifs/random/.json", "https://www.reddit.com/r/porninfifteenseconds/random/.json", "https://www.reddit.com/r/porninaminute/random/.json", "https://www.reddit.com/r/GirlsFinishingTheJob/random/.json", "https://www.reddit.com/r/cumsluts/random/.json", "https://www.reddit.com/r/Blowjobs/random/.json", "https://www.reddit.com/r/canthold/random/.json", "https://www.reddit.com/r/SecondsOfPorn/random/.json", "https://www.reddit.com/r/Step_Fantasy_GIFs/random/.json", "https://www.reddit.com/r/StepFantasyProduction/random/.json", "https://www.reddit.com/r/NSFW_Caption/random/.json", "https://www.reddit.com/r/FuckGaming/random/.json", "https://www.reddit.com/r/BlowjobGirls/random/.json", "https://www.reddit.com/r/passionx/random/.json", "https://www.reddit.com/r/NSFW_HTML5/random/.json", "https://www.reddit.com/r/nsfwhardcore/random/.json", "https://www.reddit.com/r/SheLikesItRough/random/.json", "https://www.reddit.com/r/AmateurPorn/random/.json", "https://www.reddit.com/r/nsfwhardcore/random/.json", "https://www.reddit.com/r/HugeDickTinyChick/random/.json", "https://www.reddit.com/r/freeuse/random/.json","https://www.reddit.com/r/TittyDrop/random/.json","https://www.reddit.com/r/GifsOfRemoval/random/.json", "https://www.reddit.com/r/quiver/random/.json", "https://www.reddit.com/r/SexInFrontOfOthers/random/.json", "https://www.reddit.com/r/boobbounce/random/.json", "https://www.reddit.com/r/dirtysmall/random/.json","https://www.reddit.com/r/koreannsfw/random/.json","https://www.reddit.com/r/60fpsporn/random/.json","https://www.reddit.com/r/thiccerthanyouthought/random/.json","https://www.reddit.com/r/BreedingMaterial/random/.json","https://www.reddit.com/r/juicyasians/random/.json","https://www.reddit.com/r/RealGirls/random/.json","https://www.reddit.com/r/boobbounce/random/.json","https://www.reddit.com/r/1000ccplus/random/.json","https://www.reddit.com/r/SlimandStacked/random/.json","https://www.reddit.com/r/rice_cakes/random/.json",]
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  let channel = client.channels.cache.get('911138367897481216');
  channel.send("🔄 **| Porn spam Starting...**").then((msg) => {
    var hello2 = hello[Math.floor(Math.random() * hello.length)];
    console.log(hello2)
    got(hello2).then(response => {
      const [list] = JSON.parse(response.body);
      const [post] = list.data.children;
      const permalink = post.data.permalink;
      const memeUrl = `https://reddit.com${permalink}`;
      const memeImage = post.data.url;
      const memeTitle = post.data.title;
      const memeUpvotes = post.data.ups;
      const memeNumComments = post.data.num_comments;

      const embed = new Discord.MessageEmbed()
        .setTitle(`${memeTitle}`)
        .setURL(`${memeUrl}`)
        .setColor("RANDOM")
        //.setImage(memeImage)
        .setFooter(`👍: ${memeUpvotes} | 💬: ${memeNumComments}`);
      console.log(memeImage)
      channel.send(embed)
      if (memeImage.startsWith('https://redgifs.com')) {
        let redID = memeImage.slice(26);
        redAPI = `https://api.redgifs.com/v1/gfycats/${redID}`;
        https.get(redAPI, (resp) => {
          if (resp.statusCode === 200) {
            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              mp4Link = JSON.parse(data).gfyItem.Url;
              channel.send(mp4Link)
            });
          }
        })
      }
      else if (memeImage.startsWith('http://redgifs.com')) {
        let redID = memeImage.slice(25);
        redAPI = `https://api.redgifs.com/v1/gfycats/${redID}`;
        https.get(redAPI, (resp) => {
          if (resp.statusCode === 200) {
            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              mp4Link = JSON.parse(data).gfyItem.Url;
              channel.send(mp4Link)
            });
          }
        })
      }
      else if (memeImage.startsWith('https://www.redgifs.com')) {
        let redID = memeImage.slice(30);
        redAPI = `https://api.redgifs.com/v1/gfycats/${redID}`;
        https.get(redAPI, (resp) => {
          if (resp.statusCode === 200) {
            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              mp4Link = JSON.parse(data).gfyItem.Url;
              channel.send(mp4Link)
            });
          }
        })
      }
      else if (memeImage.startsWith('http://www.redgifs.com')) {
        let redID = memeImage.slice(26);
        redAPI = `https://api.redgifs.com/v1/gfycats/${redID}`;
        https.get(redAPI, (resp) => {
          if (resp.statusCode === 200) {
            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              mp4Link = JSON.parse(data).gfyItem.Url;
              channel.send(mp4Link)
            });
          }
        })
      }
      else if (memeImage.startsWith('https://gfycat.com')) {
        let redID = memeImage.slice(19);
        redAPI = `https://api.redgifs.com/v1/gfycats/${redID}`;
        https.get(redAPI, (resp) => {
          if (resp.statusCode === 200) {
            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              mp4Link = JSON.parse(data).gfyItem.Url;
              channel.send(mp4Link)
            });
          }
        })
      }
      else {
        channel.send(memeImage)
      }
    })
    setTimeout(function() {
      msg.edit("🔄 **| Porn spam Starting...**")
      setTimeout(function() {
        msg.edit("✅ **| Porn spam Started**")
      }, 6000)
    }, 6000)
  })  //edit the message to look cool
  setInterval(() => {
    var hello2 = hello[Math.floor(Math.random() * hello.length)];
    console.log(hello2)
    got(hello2).then(response => {
      const [list] = JSON.parse(response.body);
      const [post] = list.data.children;
      const permalink = post.data.permalink;
      const memeUrl = `https://reddit.com${permalink}`;
      const memeImage = post.data.url;
      const memeTitle = post.data.title;
      const memeUpvotes = post.data.ups;
      const memeNumComments = post.data.num_comments;

      const embed = new Discord.MessageEmbed()
        .setTitle(`${memeTitle}`)
        .setURL(`${memeUrl}`)
        .setColor("RANDOM")
        //.setImage(memeImage)
        .setFooter(`👍: ${memeUpvotes} | 💬: ${memeNumComments}`);
      console.log(memeImage)
      channel.send(embed)
      if (memeImage.startsWith('https://redgifs.com')) {
        let redID = memeImage.slice(26);
        redAPI = `https://api.redgifs.com/v1/gfycats/${redID}`;
        https.get(redAPI, (resp) => {
          if (resp.statusCode === 200) {
            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              mp4Link = JSON.parse(data).gfyItem.Url;
              channel.send(mp4Link)
            });
          }
        })
      }
      else if (memeImage.startsWith('http://redgifs.com')) {
        let redID = memeImage.slice(25);
        redAPI = `https://api.redgifs.com/v1/gfycats/${redID}`;
        https.get(redAPI, (resp) => {
          if (resp.statusCode === 200) {
            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              mp4Link = JSON.parse(data).gfyItem.Url;
              channel.send(mp4Link)
            });
          }
        })
      }
      else if (memeImage.startsWith('https://www.redgifs.com')) {
        let redID = memeImage.slice(30);
        redAPI = `https://api.redgifs.com/v1/gfycats/${redID}`;
        https.get(redAPI, (resp) => {
          if (resp.statusCode === 200) {
            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              mp4Link = JSON.parse(data).gfyItem.Url;
              channel.send(mp4Link)
            });
          }
        })
      }
      else if (memeImage.startsWith('http://www.redgifs.com')) {
        let redID = memeImage.slice(29);
        redAPI = `https://api.redgifs.com/v1/gfycats/${redID}`;
        https.get(redAPI, (resp) => {
          if (resp.statusCode === 200) {
            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              mp4Link = JSON.parse(data).gfyItem.Url;
              channel.send(mp4Link)
            });
          }
        })
      }
      else if (memeImage.startsWith('https://gfycat.com')) {
        let redID = memeImage.slice(19);
        redAPI = `https://api.redgifs.com/v1/gfycats/${redID}`;
        https.get(redAPI, (resp) => {
          if (resp.statusCode === 200) {
            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              mp4Link = JSON.parse(data).gfyItem.Url;
              channel.send(mp4Link)
            });
          }
        })
      }
      else {
        channel.send(memeImage)
      }
    })
  }, 900000) //I recommend to put it above 20s to not abuse Discord Api lol

}
);
client.on("message", message => {
  if (message.content.toLowerCase() == "!porn") {
    if (message.channel.nsfw === false) {
      message.channel.send("Not a NSFW channel retard 🥱")
      return;
    }
    var hello2 = hello[Math.floor(Math.random() * hello.length)];
    console.log(hello2)
    got(hello2).then(response => {
      const [list] = JSON.parse(response.body);
      const [post] = list.data.children;

      const permalink = post.data.permalink;
      const memeUrl = `https://reddit.com${permalink}`;
      const memeImage = post.data.url;
      const memeTitle = post.data.title;
      const memeUpvotes = post.data.ups;
      const memeNumComments = post.data.num_comments;

      const embed = new Discord.MessageEmbed()
        .setTitle(`${memeTitle}`)
        .setURL(`${memeUrl}`)
        .setColor("RANDOM")
        //.setImage(memeImage)
        .setFooter(`👍: ${memeUpvotes} | 💬: ${memeNumComments}`);

      message.channel.send(embed)
      if (memeImage.startsWith('https://redgifs.com')) {
        let redID = memeImage.slice(26);
        redAPI = `https://api.redgifs.com/v1/gfycats/${redID}`;
        https.get(redAPI, (resp) => {
          if (resp.statusCode === 200) {
            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              mp4Link = JSON.parse(data).gfyItem.Url;
              message.channel.send(mp4Link)
            });
          }
        })
      }
      else if (memeImage.startsWith('http://redgifs.com')) {
        let redID = memeImage.slice(25);
        redAPI = `https://api.redgifs.com/v1/gfycats/${redID}`;
        https.get(redAPI, (resp) => {
          if (resp.statusCode === 200) {
            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              mp4Link = JSON.parse(data).gfyItem.Url;
              message.channel.send(mp4Link)
            });
          }
        })
      }
      else if (memeImage.startsWith('https://www.redgifs.com')) {
        let redID = memeImage.slice(30);
        redAPI = `https://api.redgifs.com/v1/gfycats/${redID}`;
        https.get(redAPI, (resp) => {
          if (resp.statusCode === 200) {
            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              mp4Link = JSON.parse(data).gfyItem.Url;
              message.channel.send(mp4Link)
            });
          }
        })
      }
      else if (memeImage.startsWith('http://www.redgifs.com')) {
        let redID = memeImage.slice(29);
        redAPI = `https://api.redgifs.com/v1/gfycats/${redID}`;
        https.get(redAPI, (resp) => {
          if (resp.statusCode === 200) {
            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              mp4Link = JSON.parse(data).gfyItem.Url;
              message.channel.send(mp4Link)
            });
          }
        })
      }
      else if (memeImage.startsWith('https://gfycat.com')) {
        let redID = memeImage.slice(19);
        redAPI = `https://api.redgifs.com/v1/gfycats/${redID}`;
        https.get(redAPI, (resp) => {
          if (resp.statusCode === 200) {
            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              mp4Link = JSON.parse(data).gfyItem.Url;
              channel.send(mp4Link)
            });
          }
        })
      }
      else {
        message.channel.send(memeImage)
      }
    })

  }
});


client.login("ODc0NzI0MjE5NjAxMTY2MzQ2.YRLIaQ.5C8rsgxlfes1HoIOgsSklPGqckc");
