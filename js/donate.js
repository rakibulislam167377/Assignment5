
getId('donation-btn').addEventListener('click', function () {
    this.classList.add('bg-btn');
    getId('history-btn').classList.remove('bg-btn');
    showSection('donation');
})
getId('history-btn').addEventListener('click', function () {
    this.classList.add('bg-btn');
    getId('donation-btn').classList.remove('bg-btn');
    showSection('history');
})

const date = new Date();


// getId('noakhali-btn').removeAttribute('onclick');
// noakhali donate start 
document.getElementById('noakhali-btn').addEventListener('click', function () {
    const coinAmountInt = convertFloat(getInnerText('coin-amount'));
    const donateAmount = convertFloat(getValue('noakhali-input'));
    if (coinAmountInt < donateAmount) {
        alert('You have no enough Balance');
        return
    }
    else if (isNaN(donateAmount)) {
        alert('Invalid Donate Amount');
        return

    }
    const dashboard = coinAmountInt - donateAmount;
    getId('coin-amount').innerText = dashboard;
    const donate = convertFloat(getInnerText('noakhali-amount'));
    getId('noakhali-amount').innerText = donate + donateAmount;
    getId('noakhali-input').value = '';
    getId('my-modal').showModal();


    // history page content js strat

    const donateHistory = document.getElementById('donate-history');
    donateHistory.classList.remove('hidden');
    const createDiv = document.createElement('div');
    createDiv.classList.add('border-2','rounded-xl','border-neutral-200','p-8','my-6')
    createDiv.innerHTML=`<h1 class="font-bold text-xl mb-4">${donateAmount} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h1> <p class="text-base text-neutral-500">${date}</p>`;
    donateHistory.appendChild(createDiv);
})
// noakhali donate end

// feni donate start 
document.getElementById('feni-btn').addEventListener('click', function () {
    const coinAmountInt = convertFloat(getInnerText('coin-amount'));
    const donateAmount = convertFloat(getValue('feni-input'));
    if (coinAmountInt < donateAmount) {
        alert('You have no enough Balance');
        return
    }
    else if (isNaN(donateAmount)) {
        alert('Invalid Donate Amount');
        return

    }
    const dashboard = coinAmountInt - donateAmount;
    getId('coin-amount').innerText = dashboard;
    const donate = convertFloat(getInnerText('feni-amount'));
    getId('feni-amount').innerText = donate + donateAmount;
    getId('feni-input').value = '';
    getId('my-modal').showModal();
    

    
    // history page content js strat

    const donateHistory = document.getElementById('donate-history');
    donateHistory.classList.remove('hidden');
    const createDiv = document.createElement('div');
    createDiv.classList.add('border-2','rounded-xl','border-neutral-200','p-8','my-6')
    createDiv.innerHTML=`<h1 class="font-bold text-xl mb-4">${donateAmount} Taka is Donated for Flood Relief in Feni,Bangladesh</h1> <p class="text-base text-neutral-500">${date}</p>`;
    donateHistory.appendChild(createDiv);
    


})
// feni donate end
// Quata donate start 
document.getElementById('quata-btn').addEventListener('click', function () {
    const coinAmountInt = convertFloat(getInnerText('coin-amount'));
    const donateAmount = convertFloat(getValue('quata-input'));
    if (coinAmountInt < donateAmount) {
        alert('You have no enough Balance');
        return
    }
    else if (isNaN(donateAmount)) {
        alert('Invalid Donate Amount');
        return

    }
    const dashboard = coinAmountInt - donateAmount;
    getId('coin-amount').innerText = dashboard;
    const donate = convertFloat(getInnerText('quata-amount'));
    getId('quata-amount').innerText = donate + donateAmount;
    getId('quata-input').value = '';
    getId('my-modal').showModal();



    
    // history page content js strat

    const donateHistory = document.getElementById('donate-history');
    donateHistory.classList.remove('hidden');
    const createDiv = document.createElement('div');
    createDiv.classList.add('border-2','rounded-xl','border-neutral-200','p-8','my-6')
    createDiv.innerHTML=`<h1 class="font-bold text-xl mb-4">${donateAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1> <p class="text-base text-neutral-500">${date}</p>`;
    donateHistory.appendChild(createDiv);
})
// Quata donate end

//  switch window
