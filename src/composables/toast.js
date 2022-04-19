import { computed } from 'vue'
import { useStore } from 'vuex'

export const useToast = () => {
    const store = useStore();
    const toasts = computed(() => store.state.toast.toasts);
    const showToast = computed(() => store.state.toast.showToast);
    
    const triggerToast = (message = '', type = 'success') => {        
        store.dispatch('toast/triggerToast', { message, type} );
    }

    return {
        showToast,
        triggerToast,
        toasts
    }
}