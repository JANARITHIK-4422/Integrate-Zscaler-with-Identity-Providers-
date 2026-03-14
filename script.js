document.getElementById('sso-button').onclick = function() {
      const status = document.getElementById('status-display');
      const user = document.getElementById('user-icon');
      const connector = document.getElementById('connector');
      const idp = document.getElementById('idp-box');
      const cloud = document.getElementById('zscaler-cloud');

      this.disabled = true;
      user.classList.add('active');
      status.innerText = "Status: Initiating connection...";

      setTimeout(() => {
                status.innerText = "Status: Redirecting to Identity Provider...";
                connector.classList.remove('hidden');
                connector.classList.add('active');
      }, 1000);

      setTimeout(() => {
                status.innerText = "Status: Authenticating via SAML/SSO...";
                idp.classList.remove('hidden');
                idp.classList.add('active');
      }, 2500);

      setTimeout(() => {
                status.innerText = "Status: SSO Success! Returning SAML Token...";
                idp.style.backgroundColor = "#c8e6c9";
      }, 4000);

      setTimeout(() => {
                status.innerText = "Status: Access Granted! Traffic Secured via Zscaler.";
                cloud.classList.remove('hidden');
                cloud.classList.add('active');
                document.body.style.background = "#e8f5e9";
      }, 5500);
};
