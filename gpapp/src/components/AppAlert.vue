<script setup lang="ts">
const { state: alert, closeAlert } = useAlert();
</script>

<template>
    <Transition :name="alert.type === 'error' ? 'alert-error' : 'alert'">
        <div
            v-if="alert.open"
            class="t-w-1/3 t-absolute t-top-4 t-right-4 t-z-10"
        >
            <v-alert
                class=""
                closable
                :text="alert.message"
                :type="alert.type"
                :variant="alert.variant"
                @click:close="closeAlert"
            />
        </div>
    </Transition>
</template>

<style>
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
