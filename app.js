const exercises = [
  {id:'squat',name:'Barbell Squat',group:'Lower Body',type:'Strength',difficulty:'Medium',duration:'3–5 min',kcal:'60–100',muscles:'Quads • Glutes • Core',cue:'Keep your chest tall and knees tracking over your toes.',popular:true},
  {id:'pushup',name:'Push Up',group:'Upper Body',type:'Strength',difficulty:'Easy',duration:'2–4 min',kcal:'40–70',muscles:'Chest • Triceps • Core',cue:'Keep your body in one straight line and lower under control.'},
  {id:'deadlift',name:'Deadlift',group:'Lower Body',type:'Strength',difficulty:'Hard',duration:'3–5 min',kcal:'70–120',muscles:'Hamstrings • Glutes • Back',cue:'Hinge at the hips, keep the spine neutral, and drive through the floor.'},
  {id:'bench',name:'Bench Press',group:'Upper Body',type:'Strength',difficulty:'Medium',duration:'3–5 min',kcal:'60–100',muscles:'Chest • Triceps • Shoulders',cue:'Set your shoulders, control the bar, and press evenly.'},
  {id:'lunge',name:'Lunges',group:'Lower Body',type:'Strength',difficulty:'Medium',duration:'2–4 min',kcal:'50–90',muscles:'Quads • Glutes • Balance',cue:'Take a stable step, drop straight down, then drive through the front foot.'},
  {id:'plank',name:'Plank',group:'Core',type:'Stability',difficulty:'Easy',duration:'1–3 min',kcal:'20–40',muscles:'Core • Shoulders • Glutes',cue:'Brace your core and keep your hips level with your shoulders.'},
  {id:'shoulder-press',name:'Shoulder Press',group:'Upper Body',type:'Strength',difficulty:'Medium',duration:'2–4 min',kcal:'50–80',muscles:'Delts • Triceps • Core',cue:'Press overhead without shrugging or arching your lower back.'},
  {id:'bicep-curl',name:'Bicep Curl',group:'Upper Body',type:'Isolation',difficulty:'Easy',duration:'2–3 min',kcal:'40–70',muscles:'Biceps • Forearms',cue:'Keep your elbows close to your sides and avoid swinging.'},
  {id:'tricep-extension',name:'Tricep Extension',group:'Upper Body',type:'Isolation',difficulty:'Easy',duration:'2–3 min',kcal:'40–60',muscles:'Triceps • Shoulders',cue:'Keep elbows stable and extend smoothly.'},
  {id:'leg-press',name:'Leg Press',group:'Lower Body',type:'Strength',difficulty:'Medium',duration:'3–5 min',kcal:'60–110',muscles:'Quads • Glutes • Hamstrings',cue:'Keep the lower back supported and do not lock the knees.'},
  {id:'pullup',name:'Pull Up',group:'Upper Body',type:'Strength',difficulty:'Hard',duration:'2–4 min',kcal:'50–90',muscles:'Lats • Biceps • Core',cue:'Start from a controlled hang and lead with the chest.'},
  {id:'crunch',name:'Crunches',group:'Core',type:'Isolation',difficulty:'Easy',duration:'2–3 min',kcal:'30–50',muscles:'Abs • Core',cue:'Curl the ribs toward the pelvis without pulling the neck.'},
  {id:'incline-press',name:'Incline Dumbbell Press',group:'Upper Body',type:'Strength',difficulty:'Medium',duration:'3–5 min',kcal:'55–95',muscles:'Upper Chest • Triceps • Delts',cue:'Lower with control and keep wrists stacked over elbows.'},
  {id:'lat-pulldown',name:'Lat Pulldown',group:'Upper Body',type:'Strength',difficulty:'Easy',duration:'3–5 min',kcal:'45–80',muscles:'Lats • Biceps • Upper Back',cue:'Pull elbows down and avoid swinging your torso.'},
  {id:'romanian-deadlift',name:'Romanian Deadlift',group:'Lower Body',type:'Strength',difficulty:'Medium',duration:'3–5 min',kcal:'60–100',muscles:'Hamstrings • Glutes • Erectors',cue:'Push hips backward and keep the bar close to your legs.'},
  {id:'calf-raise',name:'Calf Raise',group:'Lower Body',type:'Isolation',difficulty:'Easy',duration:'2–3 min',kcal:'25–45',muscles:'Calves • Ankles',cue:'Use a full range and pause at the top.'},
  {id:'mountain-climber',name:'Mountain Climbers',group:'Full Body',type:'Cardio',difficulty:'Medium',duration:'3–5 min',kcal:'60–100',muscles:'Core • Shoulders • Legs',cue:'Keep shoulders over hands and drive knees forward under control.'},
  {id:'burpee',name:'Burpees',group:'Full Body',type:'Cardio',difficulty:'Hard',duration:'3–5 min',kcal:'80–140',muscles:'Full Body • Cardio',cue:'Land softly, brace your core, and keep the movement continuous.'},
  {id:'jumping-jack',name:'Jumping Jacks',group:'Cardio',type:'Cardio',difficulty:'Easy',duration:'2–4 min',kcal:'40–70',muscles:'Full Body • Cardio',cue:'Maintain rhythm and land softly on the balls of the feet.'},
  {id:'side-plank',name:'Side Plank',group:'Core',type:'Stability',difficulty:'Medium',duration:'1–3 min',kcal:'20–35',muscles:'Obliques • Core • Glutes',cue:'Drive the hips upward and keep the body in a straight line.'},
  {id:'glute-bridge',name:'Glute Bridge',group:'Lower Body',type:'Strength',difficulty:'Easy',duration:'2–4 min',kcal:'35–60',muscles:'Glutes • Hamstrings • Core',cue:'Tuck the pelvis slightly and squeeze the glutes at the top.'},
  {id:'hip-thrust',name:'Hip Thrust',group:'Lower Body',type:'Strength',difficulty:'Medium',duration:'3–5 min',kcal:'50–90',muscles:'Glutes • Hamstrings',cue:'Drive through the heels and finish with ribs stacked over pelvis.'},
  {id:'chest-fly',name:'Dumbbell Chest Fly',group:'Upper Body',type:'Isolation',difficulty:'Medium',duration:'2–4 min',kcal:'40–70',muscles:'Chest • Front Delts',cue:'Keep a slight elbow bend and control the stretch.'},
  {id:'face-pull',name:'Face Pull',group:'Upper Body',type:'Stability',difficulty:'Easy',duration:'2–4 min',kcal:'30–55',muscles:'Rear Delts • Upper Back',cue:'Pull toward the face and rotate the shoulders outward.'},
  {id:'reverse-lunge',name:'Reverse Lunges',group:'Lower Body',type:'Strength',difficulty:'Medium',duration:'2–4 min',kcal:'45–80',muscles:'Glutes • Quads • Balance',cue:'Step back softly and keep the front knee stable.'},
  {id:'front-raise',name:'Dumbbell Front Raise',group:'Upper Body',type:'Isolation',difficulty:'Easy',duration:'2–3 min',kcal:'30–55',muscles:'Front Delts • Traps',cue:'Raise to shoulder height without swinging.'},
  {id:'dead-bug',name:'Dead Bug',group:'Core',type:'Stability',difficulty:'Easy',duration:'2–4 min',kcal:'20–35',muscles:'Deep Core • Hip Flexors',cue:'Keep the lower back gently connected to the floor.'},
  {id:'high-knees',name:'High Knees',group:'Cardio',type:'Cardio',difficulty:'Medium',duration:'2–4 min',kcal:'50–90',muscles:'Hip Flexors • Core • Cardio',cue:'Stay tall and drive the knees up without leaning back.'},
  {id:'push-press',name:'Push Press',group:'Full Body',type:'Strength',difficulty:'Hard',duration:'3–5 min',kcal:'65–110',muscles:'Shoulders • Legs • Core',cue:'Use a shallow leg drive and finish with locked-out control.'},
  {id:'step-up',name:'Step Up',group:'Lower Body',type:'Strength',difficulty:'Easy',duration:'2–4 min',kcal:'45–75',muscles:'Glutes • Quads • Balance',cue:'Drive through the working leg and avoid pushing off the back foot.'},
  {id:'bird-dog',name:'Bird Dog',group:'Core',type:'Stability',difficulty:'Easy',duration:'2–4 min',kcal:'20–35',muscles:'Core • Back • Glutes',cue:'Keep hips square while reaching long through opposite limbs.'},
  {id:'rows',name:'Dumbbell Row',group:'Upper Body',type:'Strength',difficulty:'Medium',duration:'3–5 min',kcal:'45–80',muscles:'Lats • Rear Delts • Biceps',cue:'Keep the torso stable and pull the elbow toward the hip.'}
];


const sports = [
  {id:'cricket',name:'Cricket',group:'Team Sports',type:'Ball Sport',focus:'Batting • Bowling • Fielding',note:'Skill + endurance'},
  {id:'football',name:'Football',group:'Team Sports',type:'Field Sport',focus:'Speed • Agility • Endurance',note:'Match conditioning'},
  {id:'hockey',name:'Hockey',group:'Team Sports',type:'Field Sport',focus:'Speed • Coordination • Endurance',note:'Match conditioning'},
  {id:'kabaddi',name:'Kabaddi',group:'Team Sports',type:'Indian Sport',focus:'Agility • Strength • Explosive power',note:'Raid + defence'},
  {id:'kho-kho',name:'Kho-Kho',group:'Team Sports',type:'Indian Sport',focus:'Sprint • Agility • Reaction',note:'Chase conditioning'},
  {id:'volleyball',name:'Volleyball',group:'Team Sports',type:'Court Sport',focus:'Jump • Reaction • Coordination',note:'Court conditioning'},
  {id:'basketball',name:'Basketball',group:'Team Sports',type:'Court Sport',focus:'Speed • Jump • Agility',note:'Court conditioning'},
  {id:'handball',name:'Handball',group:'Team Sports',type:'Court Sport',focus:'Speed • Throwing • Endurance',note:'Match conditioning'},
  {id:'badminton',name:'Badminton',group:'Racquet Sports',type:'Racquet Sport',focus:'Footwork • Reaction • Endurance',note:'Court conditioning'},
  {id:'table-tennis',name:'Table Tennis',group:'Racquet Sports',type:'Indoor Sport',focus:'Reaction • Footwork • Coordination',note:'Skill + speed'},
  {id:'tennis',name:'Tennis',group:'Racquet Sports',type:'Racquet Sport',focus:'Footwork • Power • Endurance',note:'Court conditioning'},
  {id:'boxing',name:'Boxing',group:'Combat Sports',type:'Combat Sport',focus:'Power • Footwork • Conditioning',note:'Ring conditioning'},
  {id:'karate',name:'Karate',group:'Combat Sports',type:'Martial Art',focus:'Technique • Balance • Speed',note:'Skill conditioning'},
  {id:'judo',name:'Judo',group:'Combat Sports',type:'Combat Sport',focus:'Grip • Balance • Strength',note:'Mat conditioning'},
  {id:'wushu',name:'Wushu',group:'Combat Sports',type:'Martial Art',focus:'Speed • Flexibility • Control',note:'Skill conditioning'},
  {id:'gatka',name:'Gatka',group:'Indigenous & Martial Arts',type:'Indian Sport',focus:'Agility • Coordination • Technique',note:'Traditional practice'},
  {id:'kalaripayattu',name:'Kalaripayattu',group:'Indigenous & Martial Arts',type:'Indian Martial Art',focus:'Mobility • Balance • Strength',note:'Traditional practice'},
  {id:'mallakhamb',name:'Mallakhamb',group:'Indigenous & Martial Arts',type:'Indian Sport',focus:'Strength • Grip • Flexibility',note:'Pole/rope practice'},
  {id:'thang-ta',name:'Thang-Ta',group:'Indigenous & Martial Arts',type:'Indian Martial Art',focus:'Coordination • Agility • Technique',note:'Traditional practice'},
  {id:'yogasana',name:'Yogasana',group:'Mind & Mobility',type:'Indian Discipline',focus:'Mobility • Balance • Flexibility',note:'Movement practice'},
  {id:'silambam',name:'Silambam',group:'Indigenous & Martial Arts',type:'Indian Sport',focus:'Footwork • Coordination • Speed',note:'Traditional practice'},
  {id:'archery',name:'Archery',group:'Precision Sports',type:'Target Sport',focus:'Focus • Stability • Control',note:'Precision training'},
  {id:'shooting',name:'Shooting',group:'Precision Sports',type:'Target Sport',focus:'Focus • Stability • Control',note:'Precision training'},
  {id:'athletics',name:'Athletics',group:'Athletics & Endurance',type:'Track & Field',focus:'Speed • Power • Endurance',note:'Track & field'},
  {id:'cycling',name:'Cycling',group:'Athletics & Endurance',type:'Endurance Sport',focus:'Leg power • Endurance • Cadence',note:'Road/track conditioning'},
  {id:'swimming',name:'Swimming',group:'Aquatic Sports',type:'Aquatic Sport',focus:'Full body • Endurance • Technique',note:'Pool conditioning'},
  {id:'rowing',name:'Rowing',group:'Aquatic & Endurance',type:'Endurance Sport',focus:'Legs • Back • Endurance',note:'Water/erg conditioning'},
  {id:'weightlifting',name:'Weightlifting',group:'Strength Sports',type:'Strength Sport',focus:'Power • Technique • Strength',note:'Lift technique'},
  {id:'wrestling',name:'Wrestling',group:'Combat Sports',type:'Combat Sport',focus:'Strength • Balance • Conditioning',note:'Mat conditioning'},
  {id:'gymnastics',name:'Gymnastics',group:'Skill & Mobility',type:'Gymnastics',focus:'Strength • Mobility • Control',note:'Skill training'},
  {id:'fencing',name:'Fencing',group:'Precision & Combat',type:'Combat Sport',focus:'Footwork • Reaction • Precision',note:'Bout conditioning'},
  {id:'sepak-takraw',name:'Sepak Takraw',group:'Team Sports',type:'Court Sport',focus:'Agility • Flexibility • Reaction',note:'Court conditioning'},
  {id:'kayaking',name:'Kayaking & Canoeing',group:'Aquatic & Endurance',type:'Water Sport',focus:'Upper body • Core • Endurance',note:'Water conditioning'}
];

const categories = ['All','Upper Body','Lower Body','Core','Full Body','Cardio','Stretching','Strength','Popular'];
const sportCategories = ['All','Team Sports','Racquet Sports','Combat Sports','Indigenous & Martial Arts','Athletics & Endurance','Precision Sports','Precision & Combat','Aquatic Sports','Aquatic & Endurance','Strength Sports','Skill & Mobility'];
const state = {
  page:'exercises',
  selectedCategory:'All',
  sportCategory:'All',
  query:'',
  selectedExercise:null,
  trainingExercise:null,
  reps:3,
  targetReps:10,
  set:1,
  totalSets:3,
  active:false,
  showJoints:true,
  paused:false,
  timer:0,
  interval:null,
  profileName:'Shivkumar',
  streak:7
};

function icon(name) {
  const map = {
    home:'⌂', exercises:'🏃', live:'⦿', workouts:'▦', sports:'🏆', progress:'↗', analytics:'◔', profile:'◉', settings:'⚙', search:'⌕', fire:'🔥', video:'▶', play:'▶', pause:'Ⅱ', back:'‹', check:'✓', warn:'!', close:'×'
  };
  return `<span class="icon">${map[name] || '•'}</span>`;
}

function navButton(key,label,ic) {
  return `<button class="${state.page===key?'active':''}" data-nav="${key}">${icon(ic)}<span class="label">${label}</span></button>`;
}

function figureClass(ex) {
  if (['squat','deadlift','lunge','reverse-lunge','romanian-deadlift','leg-press','step-up','calf-raise','glute-bridge','hip-thrust'].includes(ex.id)) return 'squat';
  if (['pushup','plank','side-plank','dead-bug','bird-dog'].includes(ex.id)) return ex.id==='plank'||ex.id==='side-plank' ? 'plank' : 'push';
  if (['pullup','lat-pulldown','rows'].includes(ex.id)) return 'pull';
  if (['shoulder-press','push-press','front-raise','bench','incline-press','chest-fly','tricep-extension'].includes(ex.id)) return 'press';
  return '';
}

const photoMap = {
  squat:'squat.jpg', pushup:'pushup.jpg', deadlift:'deadlift.jpg', bench:'bench.jpg',
  lunge:'lunge.jpg', plank:'plank.jpg', 'shoulder-press':'shoulder-press.jpg', 'bicep-curl':'bicep-curl.jpg',
  'tricep-extension':'tricep-extension.jpg', 'leg-press':'leg-press.jpg', pullup:'pullup.jpg', crunch:'crunch.jpg',
  'incline-press':'bench.jpg', 'lat-pulldown':'pullup.jpg', 'romanian-deadlift':'deadlift.jpg', 'calf-raise':'lunge.jpg',
  'mountain-climber':'pushup.jpg', burpee:'lunge.jpg', 'jumping-jack':'lunge.jpg', 'side-plank':'plank.jpg',
  'glute-bridge':'lunge.jpg', 'hip-thrust':'squat.jpg', 'chest-fly':'bench.jpg', 'face-pull':'bicep-curl.jpg',
  'reverse-lunge':'lunge.jpg', 'front-raise':'shoulder-press.jpg', 'dead-bug':'plank.jpg', 'high-knees':'lunge.jpg',
  'push-press':'shoulder-press.jpg', 'step-up':'lunge.jpg', 'bird-dog':'plank.jpg', rows:'pullup.jpg'
};

function exerciseArt(ex, mode='card') {
  const photo = photoMap[ex.id] || 'squat.jpg';
  return `<div class="art ${mode}"><img class="exercise-photo" src="assets/exercises/${photo}" alt="${ex.name} exercise demonstration" loading="lazy"><div class="photo-overlay"></div></div>`;
}

function card(ex) {
  return `<article class="card exercise-card">
    <div class="exercise-hero">${ex.popular?'<span class="hero-tag">★ Popular</span>':''}${exerciseArt(ex)}</div>
    <div class="card-body">
      <div class="card-title">${ex.name}</div>
      <div class="chips"><span class="chip">${ex.group}</span><span class="chip muted">${ex.type}</span></div>
      <div class="stats">
        <div class="stat"><div class="val">◷ ${ex.duration.split(' ')[0]}${ex.duration.includes('–')?'':''}</div><div class="lbl">Duration</div></div>
        <div class="stat"><div class="val fire">${ex.kcal}</div><div class="lbl">Kcal Burn</div></div>
        <div class="stat"><div class="val">${ex.difficulty}</div><div class="lbl">Difficulty</div></div>
      </div>
      <div class="card-actions"><button class="btn secondary video-btn" data-video="${ex.id}">${icon('video')}Video</button><button class="btn primary start-btn" data-start="${ex.id}">Start Exercise</button></div>
    </div>
  </article>`;
}

function filteredExercises() {
  return exercises.filter(ex => {
    const q = state.query.trim().toLowerCase();
    const catOk = state.selectedCategory==='All' || (state.selectedCategory==='Popular' ? ex.popular : state.selectedCategory==='Strength' ? ex.type==='Strength' : ex.group===state.selectedCategory);
    const qOk = !q || `${ex.name} ${ex.group} ${ex.type} ${ex.muscles}`.toLowerCase().includes(q);
    return catOk && qOk;
  });
}

function pageExercises() {
  const list = filteredExercises();
  return `<div class="page">
    <div class="page-head"><div><h1>Choose an Exercise</h1><p>Select an exercise to start your AI-guided training</p></div><div class="search-wrap"><span class="search-icon">${icon('search')}</span><input id="search" value="${state.query}" placeholder="Search exercises (e.g. squat, push, abs)" /></div></div>
    <div class="filters">${categories.map(c=>`<button class="filter ${state.selectedCategory===c?'active':''}" data-filter="${c}">${c}</button>`).join('')}</div>
    ${list.length?`<div class="exercise-grid">${list.map(card).join('')}</div>`:`<div class="card empty">No exercises match your search.</div>`}
  </div>`;
}


function filteredSports() {
  return sports.filter(sp => state.sportCategory==='All' || sp.group===state.sportCategory);
}

function sportCard(sp) {
  const icons = { 'Cricket':'🏏','Football':'⚽','Hockey':'🏑','Kabaddi':'🤼','Kho-Kho':'🏃','Volleyball':'🏐','Basketball':'🏀','Handball':'🤾','Badminton':'🏸','Table Tennis':'🏓','Tennis':'🎾','Boxing':'🥊','Karate':'🥋','Judo':'🥋','Wushu':'🈲','Gatka':'⚔️','Kalaripayattu':'🛡️','Mallakhamb':'🧗','Thang-Ta':'⚔️','Yogasana':'🧘','Silambam':'🪄','Archery':'🏹','Shooting':'🎯','Athletics':'🏃','Cycling':'🚴','Swimming':'🏊','Rowing':'🚣','Weightlifting':'🏋️','Wrestling':'🤼','Gymnastics':'🤸','Fencing':'🤺','Sepak Takraw':'⚽','Kayaking & Canoeing':'🛶' };
  return `<article class="card sport-card"><div class="sport-icon">${icons[sp.name]||'🏅'}</div><div><div class="card-title">${sp.name}</div><div class="chips"><span class="chip">${sp.group}</span><span class="chip muted">${sp.type}</span></div><p class="sport-focus">${sp.focus}</p><div class="sport-note">${sp.note}</div></div></article>`;
}

function pageSports() {
  const list=filteredSports();
  return `<div class="page"><div class="page-head"><div><h1>Indian Sports</h1><p>Explore Indian and widely played sports across training categories.</p></div></div><div class="filters sports-filters">${sportCategories.map(c=>`<button class="filter ${state.sportCategory===c?'active':''}" data-sport-filter="${c}">${c}</button>`).join('')}</div><div class="sport-grid">${list.map(sportCard).join('')}</div></div>`;
}

function metricCard(label,value,sub,good=true) { return `<div class="card metric-card"><div class="metric-label">${label}</div><div class="metric-value">${value}</div><div class="metric-sub" style="color:${good?'var(--green)':'var(--red)'}">${sub}</div></div>`; }

function pageHome() {
  return `<div class="page"><div class="page-head"><div><h1>Good evening, ${state.profileName}</h1><p>Your AI coach is ready for today's training.</p></div><button class="btn primary" data-nav="exercises">Start a Workout</button></div>
  <div class="stat-grid-4">${metricCard('Weekly Form Accuracy','86%','↑ 8% vs last week')}${metricCard('Workouts','14','↑ 3 this month')}${metricCard('Calories','4,820','↑ 14% this month')}${metricCard('Best Streak',`${state.streak} days`,'Keep it going')}</div>
  <div class="dashboard-grid"><section class="card panel"><h3>Today’s Training</h3><div class="list">${['Barbell Squat','Bench Press','Plank','Bicep Curl'].map((n,i)=>`<div class="list-row"><div><b>${n}</b><div style="font-size:11px;color:var(--muted);margin-top:4px;">${i+1}/4 • ${12-i*2} mins</div></div><button class="btn primary" data-start="${exercises.find(e=>e.name===n).id}">Start</button></div>`).join('')}</div></section><section class="card panel"><h3>AI Insights</h3><div class="list"><div class="list-row"><span>Back posture</span><span class="badge green">Improved 12%</span></div><div class="list-row"><span>Knee alignment</span><span class="badge yellow">Watch</span></div><div class="list-row"><span>Core stability</span><span class="badge green">Strong</span></div><div class="list-row"><span>Recovery</span><span class="badge green">Good</span></div></div></section></div></div>`;
}

function pageWorkouts() {
  const plans=[['Upper Body Strength','35 min','8 exercises'],['Lower Body Power','42 min','7 exercises'],['Core & Stability','24 min','6 exercises'],['Full Body HIIT','28 min','9 exercises']];
  return `<div class="page"><div class="page-head"><div><h1>Workouts</h1><p>Saved routines and AI-generated training plans.</p></div><button class="btn primary" data-toast="Workout builder opened">+ Create Workout</button></div><div class="exercise-grid">${plans.map((p,i)=>`<div class="card panel"><div class="badge ${i===0?'green':'yellow'}" style="display:inline-block">AI ${i%2?'Ready':'Optimized'}</div><h3 style="margin-top:14px">${p[0]}</h3><p style="color:var(--muted);font-size:13px">${p[2]} • ${p[1]} • adaptive rest</p><div class="chips"><span class="chip">Form-aware</span><span class="chip">AI pacing</span></div><div class="modal-actions"><button class="btn secondary" data-toast="${p[0]} saved to your plan">Save</button><button class="btn primary" data-toast="Workout started">Start</button></div></div>`).join('')}</div></div>`;
}

function pageProgress() {
  const bars=[72,78,74,83,86,89,91,88,94,96,92,95];
  return `<div class="page"><div class="page-head"><div><h1>Progress</h1><p>Long-term form, strength and consistency trends.</p></div><button class="btn secondary" data-toast="Progress exported">Export</button></div><div class="stat-grid-4">${metricCard('Form Accuracy','91%','↑ 9% over 8 weeks')}${metricCard('Total Reps','4,860','Across 14 workouts')}${metricCard('Training Time','11h 42m','This month')}${metricCard('Exercises','28','Recorded')}</div><div class="dashboard-grid"><section class="card panel"><h3>Form Accuracy — Last 12 Sessions</h3><div class="chart">${bars.map((v,i)=>`<div class="bar" style="height:${v}%"><span>${i+1}</span></div>`).join('')}</div></section><section class="card panel"><h3>Milestones</h3><div class="list"><div class="list-row"><span>100 perfect reps</span><span class="badge green">Done</span></div><div class="list-row"><span>7-day streak</span><span class="badge green">Done</span></div><div class="list-row"><span>90% form accuracy</span><span class="badge green">Done</span></div><div class="list-row"><span>100 reps of squats</span><span class="badge yellow">72%</span></div></div></section></div></div>`;
}

function pageAnalytics() {
  return `<div class="page"><div class="page-head"><div><h1>Analytics</h1><p>Exercise quality, joint scores and training load.</p></div><button class="btn secondary" data-toast="Analytics refreshed">↻ Refresh</button></div><div class="dashboard-grid"><section class="card panel"><h3>Joint Quality</h3><div class="joint-list">${[['Head/Neck',85],['Shoulders',55],['Spine (Back)',60],['Hips',88],['Knees',52],['Ankles',90]].map(([n,v])=>`<div><div class="joint-head"><span>${n}</span><b style="color:${v<70?'var(--red)':'var(--green)'}">${v}%</b></div><div class="progress-track"><div class="progress-fill" style="width:${v}%;background:${v<70?'var(--red)':'var(--green)'}"></div></div></div>`).join('')}</div></section><section class="card panel"><h3>Recent Sessions</h3><div class="list">${['Barbell Squat','Deadlift','Plank','Shoulder Press','Lunges'].map((n,i)=>`<div class="list-row"><div><b>${n}</b><div style="font-size:11px;color:var(--muted);margin-top:4px">Today • ${i+2} sets</div></div><span class="badge ${i===1?'yellow':'green'}">${i===1?'78':'8'+(3+i)}%</span></div>`).join('')}</div></section></div></div>`;
}

function pageProfile() {
  return `<div class="page"><div class="page-head"><div><h1>Profile</h1><p>Your training preferences and health-focused settings.</p></div><button class="btn primary" data-toast="Profile saved">Save Changes</button></div><div class="dashboard-grid"><section class="card panel"><h3>Personal</h3><div class="detail-grid"><div class="detail"><b>Name</b><span>${state.profileName}</span></div><div class="detail"><b>Level</b><span>Beginner</span></div><div class="detail"><b>Goal</b><span>Strength & mobility</span></div><div class="detail"><b>Weekly Target</b><span>4 workouts</span></div></div></section><section class="card panel"><h3>AI Coaching</h3><div class="list"><div class="list-row"><span>Posture sensitivity</span><span class="badge green">High</span></div><div class="list-row"><span>Joint warnings</span><span class="badge green">Enabled</span></div><div class="list-row"><span>Voice cues</span><span class="badge yellow">Optional</span></div></div></section></div></div>`;
}

function pageSettings() {
  return `<div class="page"><div class="page-head"><div><h1>Settings</h1><p>Control the FitAI experience.</p></div></div><div class="card panel"><div class="list"><div class="list-row"><span>Show joint skeleton during training</span><button class="btn ${state.showJoints?'primary':'secondary'}" data-toggle-joints>${state.showJoints?'ON':'OFF'}</button></div><div class="list-row"><span>Auto-count repetitions</span><span class="badge green">ON</span></div><div class="list-row"><span>Adaptive difficulty</span><span class="badge green">ON</span></div><div class="list-row"><span>Data sync</span><span class="badge green">Synced</span></div></div></div></div>`;
}

function stageFigure(ex) {
  const badIds = ['squat','deadlift','lunge','romanian-deadlift','reverse-lunge'];
  const bad = badIds.includes(ex.id);
  const photo = photoMap[ex.id] || 'squat.jpg';
  return `<div class="live-photo-frame">
    <img class="live-exercise-photo" src="assets/exercises/${photo}" alt="${ex.name} live exercise view">
    <div class="live-photo-shade"></div>
    <div class="ai-grid"></div>
    <div class="pose-overlay">
      <div class="pose-line line-1"></div><div class="pose-line line-2"></div><div class="pose-line line-3"></div><div class="pose-line line-4"></div><div class="pose-line line-5"></div><div class="pose-line line-6"></div>
      <div class="pose-joint ${bad?'bad':''} pj-head"></div>
      <div class="pose-joint ${bad?'bad':''} pj-shoulder-l"></div><div class="pose-joint pj-shoulder-r"></div>
      <div class="pose-joint ${bad?'bad':''} pj-elbow-l"></div><div class="pose-joint pj-elbow-r"></div>
      <div class="pose-joint pj-hip-l"></div><div class="pose-joint ${bad?'bad':''} pj-hip-r"></div>
      <div class="pose-joint ${bad?'bad':''} pj-knee-l"></div><div class="pose-joint pj-knee-r"></div>
      <div class="pose-joint pj-ankle-l"></div><div class="pose-joint pj-ankle-r"></div>
    </div>
    <div class="live-ai-badge">${icon('live')} AI POSE TRACKING</div>
    ${bad ? '<div class="live-callout red live-callout-1">Shoulder alignment</div><div class="live-callout red live-callout-2">Knee tracking</div><div class="live-callout red live-callout-3">Spine angle</div>' : '<div class="live-callout green live-callout-1">Good shoulder line</div><div class="live-callout green live-callout-2">Stable hips</div>'}
    <div class="photo-caption">LIVE CAMERA • ${ex.name}</div>
  </div>`;
}
function trainingPage(ex) {
  const score = state.paused ? 68 : Math.min(95, 68 + state.reps*2);
  const bad=ex.id==='squat'||ex.id==='deadlift'||ex.id==='lunge';
  const jointData=[['Head/Neck',85],['Shoulders',bad?55:86],['Spine (Back)',bad?60:88],['Hips',bad?88:91],['Knees',bad?52:87],['Ankles',90]];
  return `<div class="page"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px"><div><h1 style="font-size:27px;margin:0">${ex.name}</h1><p style="color:var(--muted);margin:5px 0 0">AI-guided live training • Set ${state.set}/${state.totalSets}</p></div><button class="btn secondary" data-nav="exercises">${icon('back')} Back to Exercises</button></div>
  <div class="training">
    <section class="live-stage">
      <div class="stage-bg"></div>
      <div class="stage-toolbar"><div class="pill">Exercise <b>${ex.name}</b></div><div class="pill">Reps <b>${state.reps}/${state.targetReps}</b></div><div class="pill">${state.paused?'⏸ Paused':'● LIVE'}</div></div>
      <div class="exercise-stage">${stageFigure(ex)}</div>
      <div style="position:absolute;left:18px;bottom:18px;z-index:10"><button class="btn ${state.showJoints?'primary':'secondary'}" data-toggle-joints>Show Joints: ${state.showJoints?'ON':'OFF'}</button></div>
      <div style="position:absolute;right:18px;bottom:18px;z-index:10;display:flex;gap:8px"><button class="btn secondary" data-rep-minus>− Rep</button><button class="btn primary" data-rep-plus>+ Rep</button></div>
    </section>
    <aside class="sidebar-panel">
      <div class="card overall-card"><h3 style="margin:0 0 16px">Overall Form Accuracy</h3><div class="overall-main"><div class="ring"><strong>${score}%</strong></div><div class="summary-list"><div class="summary-row"><span>Good Form Time</span><b>${score}%</b></div><div class="summary-row"><span>Needs Improvement</span><b style="color:var(--red)">${100-score}%</b></div><div class="summary-row"><span>Reps Completed</span><b>${state.reps}</b></div><div class="summary-row"><span>Estimated Calories</span><b style="color:#9bcde9">${Math.max(12,state.reps*8)} kcal</b></div></div></div></div>
      <div class="card panel"><h3>Joint Analysis</h3><div class="joint-list">${jointData.map(([n,v])=>`<div><div class="joint-head"><span>${n}</span><b style="color:${v<70?'var(--red)':'var(--green)'}">${v}%</b></div><div class="progress-track"><div class="progress-fill" style="width:${v}%;background:${v<70?'var(--red)':'var(--green)'}"></div></div></div>`).join('')}</div></div>
      <div class="card panel"><h3>Rep Analysis</h3><div class="rep-boxes"><div class="rep-box"><span>Depth</span><div class="big">70%</div></div><div class="rep-box"><span>Balance</span><div class="big" style="color:var(--green)">80%</div></div><div class="rep-box"><span>Control</span><div class="big">65%</div></div><div class="rep-box"><span>Range</span><div class="big">75%</div></div></div></div>
      <div class="card panel"><h3>Feedback</h3><div class="feedback"><span class="dot"></span>${bad?'Keep your back straight':'Keep your spine neutral'}</div><div class="feedback"><span class="dot"></span>${bad?"Don’t let knees go too forward":"Keep knees tracking over toes"}</div><div class="feedback"><span class="dot"></span>${bad?'Pull shoulders slightly back':'Maintain controlled tempo'}</div><div class="feedback good"><span class="dot"></span>${bad?'Good hip depth':'Good overall posture'}</div></div>
      <div class="live-controls"><button class="btn ${state.paused?'primary':'secondary'}" data-toggle-pause>${state.paused?'▶ Resume':'Ⅱ Pause'}</button><button class="btn primary" data-finish>Finish Set</button></div>
    </aside>
  </div></div>`;
}

function render() {
  const app = document.getElementById('app');
  let pageHtml='';
  if(state.trainingExercise) pageHtml=trainingPage(state.trainingExercise);
  else switch(state.page){
    case 'home': pageHtml=pageHome(); break;
    case 'workouts': pageHtml=pageWorkouts(); break;
    case 'sports': pageHtml=pageSports(); break;
    case 'progress': pageHtml=pageProgress(); break;
    case 'analytics': pageHtml=pageAnalytics(); break;
    case 'profile': pageHtml=pageProfile(); break;
    case 'settings': pageHtml=pageSettings(); break;
    case 'live': pageHtml=pageExercises(); break;
    default: pageHtml=pageExercises();
  }
  app.innerHTML=`<div class="app-shell"><aside class="sidebar"><div class="brand"><div class="brand-mark">✦</div><span>FitAI</span></div><nav class="nav">${navButton('home','Home','home')}${navButton('exercises','Exercises','exercises')}${navButton('live','Live Training','live')}${navButton('workouts','Workouts','workouts')}${navButton('sports','Sports','sports')}${navButton('progress','Progress','progress')}${navButton('analytics','Analytics','analytics')}${navButton('profile','Profile','profile')}</nav><div class="sidebar-bottom"><nav class="nav">${navButton('settings','Settings','settings')}</nav></div></aside><main class="main"><header class="topbar"><div class="top-left"><span class="breadcrumb">${state.trainingExercise?'Live Training':state.page==='exercises'?'Exercise Library':state.page==='sports'?'Sports':'FitAI'}</span></div><div class="user-top"><div class="streak">${icon('fire')} ${state.streak} Day Streak</div><div class="avatar">SK</div><div><div style="font-weight:800;font-size:13px">${state.profileName}</div><div style="font-size:11px;color:var(--muted)">Beginner</div></div><span class="chev">⌄</span></div></header><div class="content">${pageHtml}</div></main></div>`;
  attachEvents();
}

function toast(msg) {
  const root=document.getElementById('toast-root'); const t=document.createElement('div'); t.className='toast'; t.textContent=msg; root.appendChild(t); setTimeout(()=>t.remove(),2200);
}

function openPreview(ex) {
  const backdrop=document.createElement('div'); backdrop.className='modal-backdrop'; backdrop.id='preview-modal';
  backdrop.innerHTML=`<div class="modal"><div class="modal-head"><div><div class="chips"><span class="chip">${ex.group}</span><span class="chip muted">${ex.type}</span></div><h2 style="margin:10px 0 5px">${ex.name}</h2><div style="color:var(--muted);font-size:13px">Animated exercise preview • no external video required</div></div><button class="close" data-close-modal>×</button></div><div class="modal-body"><div class="preview-wrap"><div class="preview-stage"><div class="preview-figure"><div class="p-head"></div><div class="p-torso"></div><div class="p-arm pa1"></div><div class="p-arm pa2"></div><div class="p-leg pl1"></div><div class="p-leg pl2"></div></div><div class="preview-caption">Motion preview • ${ex.difficulty} • animated</div></div><div><h3 style="margin-top:0">Exercise Details</h3><p style="color:var(--muted);font-size:14px;line-height:1.6">${ex.cue}</p><div class="detail-grid"><div class="detail"><b>Duration</b><span>${ex.duration}</span></div><div class="detail"><b>Calories</b><span>${ex.kcal} kcal</span></div><div class="detail"><b>Primary Muscle</b><span>${ex.muscles.split(' • ')[0]}</span></div><div class="detail"><b>Difficulty</b><span>${ex.difficulty}</span></div></div><div class="modal-actions"><button class="btn secondary" data-close-modal>Close</button><button class="btn primary" data-start-modal="${ex.id}">Start Exercise</button></div></div></div></div></div>`;
  document.body.appendChild(backdrop);
  backdrop.addEventListener('click',e=>{ if(e.target===backdrop) backdrop.remove(); });
}

function startExercise(id) {
  const ex=exercises.find(e=>e.id===id); if(!ex) return;
  state.trainingExercise=ex; state.page='live'; state.reps=3; state.targetReps=10; state.set=1; state.totalSets=3; state.paused=false; startTimer(); render();
}
function startTimer(){ if(state.interval) clearInterval(state.interval); state.timer=0; state.interval=setInterval(()=>{if(state.trainingExercise&&!state.paused){state.timer++;}},1000); }
function finishSet(){ toast(`Set ${state.set} complete • ${state.reps} reps recorded`); if(state.set<state.totalSets){ state.set++; state.reps=0; state.paused=false; render(); } else { state.trainingExercise=null; state.page='progress'; clearInterval(state.interval); state.interval=null; render(); toast('Workout saved to Progress'); } }

function attachEvents(){
  document.querySelectorAll('[data-nav]').forEach(b=>b.addEventListener('click',()=>{ state.trainingExercise=null; state.page=b.dataset.nav; if(state.page==='live') state.page='exercises'; render(); }));
  document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{state.selectedCategory=b.dataset.filter; render();}));
  document.querySelectorAll('[data-sport-filter]').forEach(b=>b.addEventListener('click',()=>{state.sportCategory=b.dataset.sportFilter; render();}));
  const search=document.getElementById('search'); if(search){search.addEventListener('input',e=>{state.query=e.target.value; render(); setTimeout(()=>{const el=document.getElementById('search'); if(el){el.focus(); el.setSelectionRange(el.value.length,el.value.length);}},0);});}
  document.querySelectorAll('[data-video]').forEach(b=>b.addEventListener('click',()=>openPreview(exercises.find(e=>e.id===b.dataset.video))));
  document.querySelectorAll('[data-start]').forEach(b=>b.addEventListener('click',()=>startExercise(b.dataset.start)));
  document.querySelectorAll('[data-start-modal]').forEach(b=>b.addEventListener('click',()=>{document.getElementById('preview-modal')?.remove(); startExercise(b.dataset.startModal);}));
  document.querySelectorAll('[data-close-modal]').forEach(b=>b.addEventListener('click',()=>document.getElementById('preview-modal')?.remove()));
  document.querySelectorAll('[data-toast]').forEach(b=>b.addEventListener('click',()=>toast(b.dataset.toast)));
  document.querySelectorAll('[data-toggle-joints]').forEach(b=>b.addEventListener('click',()=>{state.showJoints=!state.showJoints; render();}));
  document.querySelectorAll('[data-rep-plus]').forEach(b=>b.addEventListener('click',()=>{state.reps=Math.min(state.targetReps,state.reps+1); render();}));
  document.querySelectorAll('[data-rep-minus]').forEach(b=>b.addEventListener('click',()=>{state.reps=Math.max(0,state.reps-1); render();}));
  document.querySelectorAll('[data-toggle-pause]').forEach(b=>b.addEventListener('click',()=>{state.paused=!state.paused; render();}));
  document.querySelectorAll('[data-finish]').forEach(b=>b.addEventListener('click',finishSet));
  const jointEls=document.querySelectorAll('.joint,.skeleton-line,.callout'); jointEls.forEach(el=>{el.style.display=state.showJoints?'':'none';});
}

render();
