<script src="/assets/js/vendor/redactor.source.js"></script>
<script src="/assets/js/vendor/redactor.video.js"></script>
<script src="/assets/js/vendor/redactor.clips.js"></script>
<script>
$(function() {
    $('.redactor').redactor({
    	 plugins: ['source', 'video', 'clips'],
    	 multipleImageUpload: true,
    	 imageCaption:true,
    	 dragImageUpload: true,
    	 imageUpload: '/api/v1/imageUpload',
    	 // buttons: ['format', 'bold', 'italic']
    });
 });
</script>
