export const sendEmail = async (email, name, text) => {
  return await fetch('https://sendemails.vercel.app/v2/send/email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      token: process.env.VUE_APP_KEY_API,
      name: name,
      fromEmail: email,
      text: text,
      toEmail: process.env.VUE_APP_TO_EMAIL
    })
  }).then(res => res.json())
    .then(datas => datas)
    .catch(error => error);
}

export const lastCommit = async (user) => {
  const events = await fetch(`https://api.github.com/users/${user}/events`)
    .then(res => res.json())
    .then(datas => datas)
    .catch(error => error);

  const event = events.filter(event => event.type === 'PushEvent' ? event : false);

  return event[0];
}

export const gitUser = async (user) => {
  return await fetch(`https://api.github.com/users/${user}`)
    .then(res => res.json())
    .then(datas => datas)
    .catch(error => error);
}