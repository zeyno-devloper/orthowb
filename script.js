// دالة لعرض محتوى SIGN UP
function showSignUp() {
    document.getElementById('content').innerHTML = `
        <h2>DOCTOR'S DATA</h2>
        <form>
            <label for="no">NO</label>
            <input type="text" id="no" name="no" placeholder="Enter doctor number">

            <label for="name">NAME</label>
            <input type="text" id="name" name="name" placeholder="Enter your name">
            
            <label for="password">PASSWORD</label>
            <input type="password" id="password" name="password" placeholder="Enter your password">

            <label for="confirm">CONFIRM</label>
            <input type="password" id="confirm" name="confirm" placeholder="Confirm your password">

            <label for="type">TYPE</label>
            <select id="type" name="type">
                <option value="Orthopedic">Orthopedic</option>
                <option value="Pediatric">Pediatric</option>
                <option value="General">General</option>
            </select>

            <label for="signature">SIGNATURE</label>
            <input type="text" id="signature" name="signature" placeholder="Enter your signature">

            <label for="note">NOTE</label>
            <textarea id="note" name="note" placeholder="Add a note"></textarea>

            <div class="buttons">
                <button type="submit" class="insert">INSERT</button>
                <button type="button" class="delete">DELETE</button>
                <button type="button" class="exit">EXIT</button>
            </div>
        </form>
    `;
}

// دالة لعرض محتوى SIGN IN
function showSignIn() {
    document.getElementById('content').innerHTML = `
        <h2>DOCTOR'S DATA</h2>
        <form>
            <label for="name">NAME</label>
            <input type="text" id="name" name="name" placeholder="Enter your name">
            
            <label for="password">PASSWORD</label>
            <input type="password" id="password" name="password" placeholder="Enter your password">
            
            <div class="buttons">
                <button type="submit" class="sign-in">SIGN IN</button>
                <button type="button" class="exit">EXIT</button>
            </div>
        </form>
    `;
}



// footer 
// تحديث اسم المستخدم بعد تسجيل الدخول
const username = "zeyno"; // هذا مثال، يمكنك تغييره بناءً على تسجيل الدخول
document.getElementById('username').textContent = username;

// تحديث التاريخ والوقت
function updateDateTime() {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    document.getElementById('datetime').textContent = `Current Date: ${formattedDate}, Time: ${formattedTime}`;
}

// تحديث الوقت عند تحميل الصفحة وكل ثانية
updateDateTime();
setInterval(updateDateTime, 1000);

// <!-- سكريبت JavaScript load pages -->

function loadPage(pageUrl) {
    

    const container = document.getElementById('content-container');
    fetch(pageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Page not found!');
            }
            return response.text();
        })
        .then(data => {
            container.innerHTML = data;
        })
        .catch(error => {
            container.innerHTML = `<p class="text-danger">Error: ${error.message}</p>`;
        });
}
