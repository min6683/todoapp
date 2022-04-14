<template>
    <div class="modal-wrapper">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Todo Delete</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span @click="onClose">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    내용을 삭제하시겠습니까?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="onClose">Close</button>
                    <button type="button" class="btn btn-danger" @click="onDlete">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        emits: ['close', 'onDlete'],
        setup(props, {emit}) {
            const onClose = () => {
                emit('close');
            };
            const onDlete = () =>{
                emit('onDlete');

            }
            return {
                onClose,
                onDlete
            }

        }
    }
</script>

<style>
    .modal-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba( 0, 0, 0, 0.5);
        z-index: 9;
    }
</style>