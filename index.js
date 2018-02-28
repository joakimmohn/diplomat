const subjects = {};

const diplomat = {
    on(subject, fn) {
        if(!subjects.hasOwnProperty(subject)) {
            subjects[subject] = [];
        };
        
        const index = subjects[subject].push(fn) - 1;

        const remove = () => {
            delete subjects[subject][index];
        };
        
        return remove;
    },

    emit(subject, data) {
        if(subjects.hasOwnProperty(subject)) {
            for(const fn of subjects[subject]) {
                fn(data != undefined ? data : {});
            }
        }
    }
};

module.exports = diplomat;