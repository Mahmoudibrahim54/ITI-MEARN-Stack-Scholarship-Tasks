let notify = function (msg) {
  console.log(`message from email: ${msg}`);
};

const facebook = function (func) {
  return function (msg) {
    console.log(`message from facebook: ${msg}`);
    return func(msg);
  };
};

const slack = function (func) {
  return function (msg) {
    console.log(`message from slack: ${msg}`);
    return func(msg);
  };
};

const sms = function (func) {
  return function (msg) {
    console.log(`message from sms: ${msg}`);
    return func(msg);
  };
};

// notify = facebook(notify);

// console.log(notify("did it work"));


function base_decorotor(msg, channel) {
  switch (channel) {
    case "f": // facebook + email
      notify = facebook(notify);
      notify(msg);
      break;

    case "s": // slack + email
      notify = slack(notify);
      notify(msg);
      break;

    case "sm": // sms + email
      notify = sms(notify);
      notify(msg);
      break;

    case "fs": // facebook + slack + email
      notify = facebook(slack(notify));
      notify(msg);
      break;

    case "fsm": // facebook + sms + email
      notify = facebook(sms(notify));
      notify(msg);
      break;

    case "fssm": // facebook + slack + sms + email
      notify = facebook(slack(sms(notify)));
      notify(msg);
      break;
  }
}