fetch('http://localhost:3005/api/leads', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Real Browser Test',
    email: 'alpha@cortexhive.co.uk',
    projectType: 'Custom AI Tools',
    budget: '$10k - $30k',
    timeline: '1 - 3 months',
    brief: 'Testing the Slack webhook formatting directly from the script file.'
  })
}).then(r => r.json()).then(console.log);
