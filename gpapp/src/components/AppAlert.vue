<script setup lang="ts">
const { state: alertState, closeAlert } = useAlert();
</script>

<template>
    <Transition :name="alertState.type === 'error' ? 'alert-error' : 'alert'">
        <div v-if="alertState.open">
            <v-alert
                closable
                :text="alertState.message"
                :type="alertState.type"
                :variant="alertState.variant"
                @click:close="closeAlert"
            />
        </div>
    </Transition>
</template>

<style scoped>
.alert-enter-active {
    animation: alert 0.2s ease-out;
}

.alert-leave-active {
    animation: alert 0.2s reverse;
}

.alert-error-enter-active {
    animation: alert 0.2s ease-out, shake 0.2s ease 0.2s;
}

.alert-error-leave-active {
    animation: alert 0.2s reverse;
}

@keyframes alert {
    from {
        opacity: 0;
        transform: translateX(500px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes shake {
    0% {
        transform: rotate(0);
    }

    25% {
        transform: rotate(5deg);
    }

    75% {
        transform: rotate(-5deg);
    }

    100% {
        transform: rotate(0);
    }
}
</style>
