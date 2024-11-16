import {ref} from "vue";

const show = ref(false)

export const useLoading = () => {
	return {
		show,
		showLoading: () => show.value = true,
		hideLoading: () => show.value = false
	}
}