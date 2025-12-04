const addTaskBtn = document.getElementById('addTaskBtn');
const modalOverlay = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('closeBtn');
const cancelBtn = document.getElementById('cancelBtn');
const taskForm = document.getElementById('taskForm');
const myTaskBtn = document.querySelector('.my-task button');
const summaryBtn = document.querySelector('.summary button');
const taskContent = document.querySelector('.task-head').parentElement;
const aiSummaryContent = document.getElementById('aiSummaryContent');


myTaskBtn.addEventListener('click', () => {
    myTaskBtn.classList.add('active');
    summaryBtn.classList.remove('active');
    
    
    document.querySelector('.task-head').style.display = 'flex';
    document.querySelector('.empty-box').style.display = 'flex';
    aiSummaryContent.style.display = 'none';
});

summaryBtn.addEventListener('click', () => {
    summaryBtn.classList.add('active');
    myTaskBtn.classList.remove('active');
    
    
    document.querySelector('.task-head').style.display = 'none';
    document.querySelector('.empty-box').style.display = 'none';
    aiSummaryContent.style.display = 'block';
});


addTaskBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active');
});

const closeModal = () => {
    modalOverlay.classList.remove('active');
    taskForm.reset();
};

closeBtn.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', closeModal);

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const task = {
        title: document.getElementById('taskTitle').value,
        description: document.getElementById('taskDescription').value,
        priority: document.getElementById('taskPriority').value,
        dueDate: document.getElementById('taskDueDate').value
    };

    console.log('New task created:', task);
    alert('Task created successfully!');
    closeModal();
});