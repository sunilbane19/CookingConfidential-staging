const DIETARY_ICON_MAP=[
  {label:'Vegetarian',code:'V',color:'#218443'},
  {label:'Non-Veg',code:'NV',color:'#C43D32'},
  {label:'Vegan',code:'VG',color:'#176B43'},
  {label:'Pescatarian',code:'P',color:'#2878B9'},
  {label:'Fish',code:'F',color:'#1686A0'},
  {label:'Shellfish',code:'SH',color:'#C56A32'},
  {label:'Gluten-Free',code:'GF',color:'#2878B9'},
  {label:'Dairy-Free',code:'DF',color:'#168C91'},
  {label:'Egg-Free',code:'EF',color:'#B88616'},
  {label:'Nut-Free',code:'NF',color:'#B86A25'},
  {label:'Peanut-Free',code:'PF',color:'#9B6337'},
  {label:'Soy-Free',code:'SF',color:'#56813B'},
  {label:'Low-Carb',code:'LC',color:'#7954A5'},
  {label:'Keto',code:'K',color:'#633C91'}
];
const dietaryKey=value=>String(typeof value==='string'?value:value?.label||value?.name||'').trim().toLocaleLowerCase().replace(/[\s_]+/g,'-');
export function getDietaryIconData(tags){
  const values=Array.isArray(tags)?tags:[];
  const byKey=new Map(DIETARY_ICON_MAP.map(item=>[dietaryKey(item.label),item]));
  const seen=new Set();
  return values.map(value=>byKey.get(dietaryKey(value))).filter(item=>item&&!seen.has(item.code)&&seen.add(item.code));
}
export function renderDietaryBadges(tags,className='cc-dietary-badges'){
  const items=getDietaryIconData(tags);
  if(!items.length)return '';
  return '<div class="'+className+'" role="list" aria-label="Dietary and suitability">'+items.map(item=>'<span class="cc-dietary-icon" role="listitem" title="'+item.label+'" aria-label="'+item.label+'" style="background-color:'+item.color+'">'+item.code+'</span>').join('')+'</div>';
}
