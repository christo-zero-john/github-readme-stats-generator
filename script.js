var data = {
    username:"christo-zero-john",
    statsCard:{
        cardWidth:500,
        customTitle:"My GitHub Stats",
        hideRank:false,
        hideTitle:false,
        hideOptions:[],
        addOptions:[],
        showIcons:true,
        rankIconType:'default',
        lineHeight:25,
        theme:'transparent',
        titleColor:"",
        backgroundColor:"",
        textColor:"",
        iconColor:"",
        ringColor:"",
        borderColor:"",
        hideBorder:false,
        borderRadius: 0,
        numberFormat:"short",
        cardlang:"en"
    },
    code:{
        components:[],
        html:[],
        md:[]
    }
}

var previewDiv = document.getElementById("previewDiv");
var codeDiv = document.getElementById("codeDiv");
var codeDivHeader = document.getElementById("codeDivHeader");
var codeDivContent = document.getElementById("codeDivContent");




function statsCard(){
// card width
    data.statsCard.cardWidth  = document.getElementById("cardWidth").value;
    
    // data.username  = document.getElementById("username").value;
    
    // data.statsCard.customTitle  = document.getElementById("customTitle").value;
    
// hide Rank
    (document.getElementById("hideRank").checked)?data.statsCard.hideRank = true:data.statsCard.hideRank = false;

// hide Title
    (document.getElementById("hideTitle").checked)?data.statsCard.hideTitle = true:data.statsCard.hideTitle = false;
    
// hide options
    if(document.getElementById("stars").checked && !data.statsCard.hideOptions.includes('stars')){
        data.statsCard.hideOptions.push('stars');
    }
    else{
        if(!document.getElementById("stars").checked && data.statsCard.hideOptions.includes('stars')){
            data.statsCard.hideOptions.splice(data.statsCard.hideOptions.indexOf('stars'), 1);
        }
    }

    if(document.getElementById("commits").checked && !data.statsCard.hideOptions.includes('commits')){
        data.statsCard.hideOptions.push('commits');
    }
    else{
        if(!document.getElementById("commits").checked && data.statsCard.hideOptions.includes('commits')){
            data.statsCard.hideOptions.splice(data.statsCard.hideOptions.indexOf('commits'), 1);
        }
    }

    if(document.getElementById("prs").checked && !data.statsCard.hideOptions.includes('prs')){
        data.statsCard.hideOptions.push('prs');
    }
    else{
        if(!document.getElementById("prs").checked && data.statsCard.hideOptions.includes('prs')){
            data.statsCard.hideOptions.splice(data.statsCard.hideOptions.indexOf('prs'), 1);
        }
    }

    if(document.getElementById("issues").checked && !data.statsCard.hideOptions.includes('issues')){
        data.statsCard.hideOptions.push('issues');
    }
    else{
        if(!document.getElementById("issues").checked && data.statsCard.hideOptions.includes('issues')){
            data.statsCard.hideOptions.splice(data.statsCard.hideOptions.indexOf('issues'), 1);
        }
    }

    if(document.getElementById("contribs").checked && !data.statsCard.hideOptions.includes('contribs')){
        data.statsCard.hideOptions.push('contribs');
    }
    else{
        if(!document.getElementById("contribs").checked && data.statsCard.hideOptions.includes('contribs')){
            data.statsCard.hideOptions.splice(data.statsCard.hideOptions.indexOf('contribs'), 1);
        }
    }

// Total Pull requests Reviewed
    if(document.getElementById("reviews").checked && !data.statsCard.addOptions.includes('reviews')){
        data.statsCard.addOptions.push('reviews');
    }
    else{
        if(!document.getElementById("reviews").checked && data.statsCard.addOptions.includes('reviews')){
            data.statsCard.addOptions.splice(data.statsCard.addOptions.indexOf('reviews'), 1);
        }
    }

// Total Discussions Started
    if(document.getElementById("discussions_started").checked && !data.statsCard.addOptions.includes('discussions_started')){
        data.statsCard.addOptions.push('discussions_started');
    }
    else{
        if(!document.getElementById("discussions_started").checked && data.statsCard.addOptions.includes('discussions_started')){
            data.statsCard.addOptions.splice(data.statsCard.addOptions.indexOf('discussions_started'), 1);
        }
    }

// Total Discussions Answered
    if(document.getElementById("discussions_answered").checked && !data.statsCard.addOptions.includes('discussions_answered')){
        data.statsCard.addOptions.push('discussions_answered');
    }
    else{
        if(!document.getElementById("discussions_answered").checked && data.statsCard.addOptions.includes('discussions_answered')){
            data.statsCard.addOptions.splice(data.statsCard.addOptions.indexOf('discussions_answered'), 1);
        }
    }

// Total Pull Requests Merged
    if(document.getElementById("prs_merged").checked && !data.statsCard.addOptions.includes('prs_merged')){
        data.statsCard.addOptions.push('prs_merged');
    }
    else{
        if(!document.getElementById("prs_merged").checked && data.statsCard.addOptions.includes('prs_merged')){
            data.statsCard.addOptions.splice(data.statsCard.addOptions.indexOf('prs_merged'), 1);
        }
    }

// Total Pull Requests Merged
    if(document.getElementById("prs_merged").checked && !data.statsCard.addOptions.includes('prs_merged')){
        data.statsCard.addOptions.push('prs_merged');
    }
    else{
        if(!document.getElementById("prs_merged").checked && data.statsCard.addOptions.includes('prs_merged')){
            data.statsCard.addOptions.splice(data.statsCard.addOptions.indexOf('prs_merged'), 1);
        }
    }

// Pull Requests Merge Percentage
    if(document.getElementById("prs_merged_percentage").checked && !data.statsCard.addOptions.includes('prs_merged_percentage')){
        data.statsCard.addOptions.push('prs_merged_percentage');
    }
    else{
        if(!document.getElementById("prs_merged_percentage").checked && data.statsCard.addOptions.includes('prs_merged_percentage')){
            data.statsCard.addOptions.splice(data.statsCard.addOptions.indexOf('prs_merged_percentage'), 1);
        }
    }

    data.statsCard.showIcons = document.getElementById("showIcon").checked;

    data.statsCard.rankIconType = document.getElementById("rankIconType").value;
    
    data.statsCard.lineHeight = document.getElementById("lineHeight").value;

    if(document.getElementById("customColors").checked){ 
        data.statsCard.titleColor =data.statsCard.titleColor = document.getElementById("titleColor").value.slice(1);    
        
        data.statsCard.backgroundColor =data.statsCard.backgroundColor = document.getElementById("backgroundColor").value.slice(1);     
        
        data.statsCard.textColor =data.statsCard.textColor = document.getElementById("textColor").value.slice(1);      
        
        data.statsCard.iconColor =data.statsCard.iconColor = document.getElementById("iconColor").value.slice(1); 
        
        data.statsCard.ringColor =data.statsCard.ringColor = document.getElementById("ringColor").value.slice(1); 
        
        data.statsCard.borderColor =data.statsCard.borderColor = document.getElementById("borderColor").value.slice(1); 
    }

    else{ 
        data.statsCard.titleColor =data.statsCard.titleColor = ""   
        
        data.statsCard.backgroundColor =data.statsCard.backgroundColor = ""    
        
        data.statsCard.textColor =data.statsCard.textColor = ""     
        
        data.statsCard.iconColor =data.statsCard.iconColor = ""
        
        data.statsCard.ringColor =data.statsCard.ringColor = "" 
        
        data.statsCard.borderColor =data.statsCard.borderColor = "" 
    }

    data.statsCard.hideBorder = data.statsCard.hideBorder = document.getElementById("hideBorder").checked; 

    data.statsCard.borderRadius = data.statsCard.borderRadius = document.getElementById("borderRadius").value; 

    data.statsCard.numberFormat = data.statsCard.numberFormat = document.getElementById("numberFormat").value; 

    data.statsCard.cardlang = data.statsCard.cardlang = document.getElementById("cardlang").value; 

    data.statsCard.theme = document.getElementById("theme").value; 

    previewDiv.innerHTML = `
        <button class="btn btn-success d-block m-auto px-5 my-2" id="" onclick="statsCard()">Generate Card</button>
        <p class="cardPreview fs-4">Card Preview</p>
        <img id="previewImg" src="https://github-readme-stats.vercel.app/api?username=${data.username}&hide=${String(data.statsCard.hideOptions)}&show=${String(data.statsCard.addOptions)}&show_icons=${data.statsCard.showIcons}&title_color=${data.statsCard.titleColor}&text_color=${data.statsCard.textColor}&icon_color=${data.statsCard.iconColor}&ring_color=${data.statsCard.ringColor}&border_color=${data.statsCard.borderColor}&bg_color=${data.statsCard.backgroundColor}&hide_border=${data.statsCard.hideBorder}&locale=${data.statsCard.cardlang}&border_radius=${data.statsCard.borderRadius}&hide_title=${data.statsCard.hideTitle}&card_width=${data.statsCard.cardWidth}&hide_rank=${data.statsCard.hideRank}&rank_icon=${data.statsCard.rankIconType}&line_height=${data.statsCard.lineHeight}&custom_title=${data.statsCard.customTitle}&number_format=${data.statsCard.numberFormat}&theme=${data.statsCard.theme}" alt="GitHub Status Card of ${data.username}">

        <p class="addCradMsg p">Add this Card(Once added it cannot be removed)</p>
        <button class="btn btn-warning d-block m-auto my-2" onclick="addCard()">ADD</button>
    `
    console.log(data)
    console.log(document.getElementById("previewImg").src)
}

function addCard(){
    data.code.html.push(document.getElementById('previewImg').src);

    data.code.md.push(`[${document.getElementById('previewImg').alt}](${document.getElementById('previewImg').src})`);


    console.log(data)
}

function code(x){
    switch(x){
        case "preview":{
            for(x in data.code.html){
            codeDiv.innerHTML += `
            <img src="${data.code.html[x]}" alt="">
                    
            `
            }
        }
    }
}

statsCard();