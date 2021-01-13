const iconReplace = function(name){
	switch (name) {
        case 'quote':
            return {name: "quote-right", type: "fas"};
            break;
    
        case 'translation':
            return {name: "language", type: "fas"};
            break;
    
        case 'metamorphose':
            return {name: "exchange-alt", type: "fas"};
            break;
    
        case 'table':
            return {name: "table", type: "fas"};
            break;
    
        case 'camel':
            return {name: "text-height", type: "fas"};
            break;
 
        case 'collapse':
            return {name: "compress-alt", type: "fas"};
            break;

        case 'counter':
            return {name: "stopwatch-20", type: "fas"};
            break;

        case 'watch':
            return {name: "calendar-alt", type: "fas"};
            break;

        case 'colloseum':
            return {name: "spell-check", type: "fas"};
            break;

        case 'type':
            return {name: "text-height", type: "fas"};
            break;

        case 'command':
            return {name: "terminal", type: "fas"};
            break;

        case 'broom':
            return {name: "broom", type: "fas"};
            break;

        case 'HTML':
            return {name: "html5", type: "fab"};
            break;

        case 'identification':
            return {name: "id-badge", type: "fas"};
            break;

        case 'website':
            return {name: "sitemap", type: "fas"};
            break;

        case 'kebab':
            return {name: "text-height", type: "fas"};
            break;

        case 'fingerprint':
            return {name: "fingerprint", type: "fas"};
            break;

        case 'term':
            return {name: "terminal", type: "fas"};
            break;

        case 'sort-numbers':
            return {name: "sort-numeric-down", type: "fas"};
            break;

        case 'elephant':
            return {name: "php", type: "fab"};
            break;

        case 'filtration':
            return {name: "filter", type: "fas"};
            break;

        case 'flip':
            return {name: "redo", type: "fas"};
            break;

        case 'roman':
            return {name: "user-secret", type: "fas"};
            break;

        case 'dice':
            return {name: "dice", type: "fas"};
            break;

        case 'snake':
            return {name: "text-height", type: "fas"};
            break;

        case 'sort-characters':
            return {name: "sort-alpha-down", type: "fas"};
            break;

        case 'pineapple':
            return {name: "text-height", type: "fas"};
            break;

        case 'abacus':
            return {name: "calculator", type: "fas"};
            break;

        case 'flask':
            return {name: "flask", type: "fas"};
            break;

        case 'scissors':
            return {name: "cut", type: "fas"};
            break;

        case 'link':
            return {name: "link", type: "fas"};
            break;

        case 'color-wheel':
            return {name: "palette", type: "fas"};
            break;

        default:
            return {name: "terminal", type: "fas"};
            break;
    }
}

module.exports ={
	iconReplace
}